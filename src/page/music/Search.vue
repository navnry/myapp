<template>
  <div class="search">
    <div class="main">
      <div class="mod_search_bar">
        <div class="search_bar_cont">
          <form method="get" action="#">
            <input class="search_input" ref="searchValue" type="search" autocomplete="off" autocorrect="off"
                   placeholder="搜索歌曲、歌单、专辑" v-model="inputValue">
            <span class="icon icon_search">搜索</span><span class="icon icon_delete" style="display: none;">删除</span>
          </form>
        </div>
        <div class="search_bar_tip_text" style="display: none;">取消</div>
      </div>
      <div>
        <h2 class="result_tit">热门搜索</h2>
        <div>
          <a href="javascript:;" class="hotkey-item hotkey-item-special">{{hotkeys.special_key}}</a>
          <a href="javascript:;" class="hotkey-item" ref="searchValue"
             @click="getInputValue(index)"
             v-for="(item,index) in hotkeys.hotkey"
             v-if="index<8">{{item.k}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {getHotKey, getSuggestion} from "@/api/getSearchData";

  export default {
    name: "Search",
    data() {
      return {
        hotkeys: {},
        searchResult: {},
        inputValue: ''
      }
    },
    created() {
      this._getHotData();
    },
    methods: {
      _getHotData() {
        getHotKey().then((res) => {
          console.log(res.data);
          this.hotkeys = res.data
        })
      },
      getInputValue(index) {
        let value = this.$refs.searchValue[index].innerText
        getSuggestion(value, 10).then((res) => {
          console.log(res);
          this.searchResult = res.data.song.list
        })
      }
    }
  }
</script>

<style scoped>

  .search{
    width: 100%;
    height: 100%;
    background: #f5f5f5;
  }
  .mod_search_bar {
    background: #f4f4f4;
    padding: .2rem 0;
    display: -webkit-box;
    -webkit-box-orient: horizontal;
    -webkit-box-align: center;
  }

  .mod_search_bar .search_bar_cont {
    position: relative;
    border-radius: .06rem;
    background: #fff;
    height: .4rem;
    padding: .16rem .24rem .16rem .7rem;
    -webkit-box-flex: 1;
    box-sizing: content-box;
  }

  .mod_search_bar .search_input {
    height: .4rem;
    line-height: .4rem;
    width: 100%;
    color: rgba(0, 0, 0, .3);
    border: none;
    -webkit-appearance: none;
    font-size: .28rem;
    outline: none;
  }

  .mod_search_bar .icon_search {
    position: absolute;
    top: .18rem;
    left: .2rem;
    width: .36rem;
    height: .36rem;
    /*background-image: url("../assets/icon_search.png");*/
    background-repeat: no-repeat;
    background-size: cover;
    text-indent: -999px;
  }


  #search .result_tit {
    margin-bottom: .16rem;
    font-size: .3rem;
  }

  .hotkey-item {
    display: inline-block;
    font-size: .28rem;
    padding: 0 .2rem;
    height: .6rem;
    line-height: .58rem;
    color: #000;
    border: 1px solid rgba(0, 0, 0, .6);
    border-radius: 1rem;
    word-break: keep-all;
    margin-bottom: .2rem;
    margin-right: .2rem;
  }

  .hotkey-item-special {
    color: #fc4524;
    border-color: #fc4524;
  }
</style>
