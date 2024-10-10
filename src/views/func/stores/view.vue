<script setup lang="ts">
import { ref, reactive, onMounted, computed, watch } from 'vue'
import * as db from './datas'

import switchs from './switch.vue'

onMounted(() => {
    datas.value = [...db.games]
})

const datas: any = ref([])
</script>

<template>
    <div class="contents">
        <div class="box-search">
            <div class="left">
                Total: {{ datas.length }}
            </div>
            <div class="right"></div>
        </div>
        <div class="list-games">
            <div v-for="game in datas">
                <switchs :data="game"></switchs>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.contents {
    background: url(/docs/games/consoles/bg.jpg);
    background-size: 100% 100%;
}

.box-search {
    margin-bottom: 20px;
    padding: 0 20px;
    height: 40px;
    color: #fff;
    background: #000;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
        font-size: 18px;
        font-weight: 700;
    }
}

.list-games {
    height: calc(100vh - 150px);
    overflow: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: 20px;
    row-gap: 20px;
}
</style>
