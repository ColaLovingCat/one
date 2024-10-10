<script setup lang="ts">
import { ref, reactive, onMounted, computed, watch } from 'vue'
import * as db from './datas'

onMounted(() => {
    datas.value = [...db.games]
})

const datas: any = ref([])
</script>

<template>
    <div class="contents">
        <div class="list-series">
            <div class="series-item" v-for="series in datas">
                <div class="header">
                    <h4 class="titles">{{ series.title }}</h4>
                </div>
                <a-timeline mode="alternate">
                    <a-timeline-item v-for="game in series.list">
                        <div class="game-item">
                            <div class="item-year">
                                {{ game.year }}
                            </div>
                            <div class="item-name">
                                {{ game.name }}
                            </div>
                            <div class="item-logo">
                                <img :src="`/docs/wiki/${game.logo}`" alt="" srcset="">
                            </div>
                        </div>
                    </a-timeline-item>
                </a-timeline>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.list-series {
    display: flex;

    .series-item {
        width: 550px;

        .header {
            padding: 10px 0;
            text-align: center;
            font-size: 30px;
            font-weight: 700;
        }
    }
}

.game-item {

    .item-year,
    .item-name {
        font-size: 18px;
        font-weight: 700;
    }

    .item-logo {
        width: 200px;
    }
}
</style>
