<script setup lang="ts">
import { ref, reactive, onMounted, computed, watch } from 'vue'
import * as db from './datas'

onMounted(() => {
    datas.value = [...db.list]
})

const datas: any = ref([])
</script>

<template>
    <div class="contents">
        <div class="list-posters">
            <div class="poster-item" v-for="item in datas">
                <div class="item-poster">
                    <img :src="`/docs/games/posters/${item.img}`" alt="" srcset="">
                    <div class="item-show txt-xinye" :style="item.styles">{{ item.show }}</div>
                </div>
                <div class="item-infos" :style="`background: ${item.back}`">
                    <div class="item-header">
                        <div class="item-titles">{{ item.title }}</div>
                        <div>{{ item.originaltitle }}</div>
                    </div>
                    <div class="item-info">
                        <div class="item-row">
                            <div class="item-ratings">
                                <div class="item-label">
                                    RATING:
                                </div>
                                <div class="item-rating">
                                    <a-rate v-model:value="item.rating" allow-half />
                                </div>
                            </div>
                        </div>
                        <div class="item-row">
                            <div class="item-dates">
                                <div class="item-label">
                                    DATE:
                                </div>
                                <div class="item-date">
                                    {{ item.date }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item-platforms">
                        <img v-for="platform in item.platforms" :src="`/docs/platforms/${platform}`"
                            class="item-platform" alt="" sizes="" srcset="">
                    </div>
                </div>
                <div class="item-lines">
                    <div class="item-line"></div>
                    <div class="item-line"></div>
                    <div class="item-line"></div>
                    <div class="item-line"></div>
                    <div class="item-line"></div>
                    <div class="item-line"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.list-posters {
    display: flex;
    flex-direction: column;
    row-gap: 20px;

    .poster-item {
        position: relative;
        width: 750px;
        height: 260px;
        display: flex;

        .item-poster {
            position: relative;
            width: 520px;
            height: 260px;
            overflow: hidden;
            border-radius: 15px;

            img {
                object-fit: cover;
            }
        }

        .item-show {
            position: absolute;
            color: #fff;
        }

        .item-infos {
            flex: 1;
            height: 260px;
            padding: 20px;
            color: #fff;
            border-radius: 20px;
            box-shadow: rgba(14, 63, 126, 0.06) 0px 0px 0px 1px, rgba(42, 51, 70, 0.03) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 2px 2px -1px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.03) 0px 5px 5px -2.5px, rgba(42, 51, 70, 0.03) 0px 10px 10px -5px, rgba(42, 51, 70, 0.03) 0px 24px 24px -8px;
            display: flex;
            flex-direction: column;
            row-gap: 8px;
        }

        .item-header {
            border-bottom: 3px dashed #fff;
            padding-bottom: 8px;

            .item-titles {
                margin-bottom: 8px;
                font-size: 21px;
                font-weight: 700;
            }
        }

        .item-info {
            display: flex;
            flex-direction: column;
            row-gap: 8px;
        }

        .item-row {
            display: flex;

            &>* {
                flex: 1;
            }
        }

        .item-date {
            font-weight: 700;
        }

        .item-platforms {
            position: absolute;
            bottom: 8px;
            right: 8px;
            display: flex;

            .item-platform {
                width: 40px;
            }
        }

        .item-lines {
            position: absolute;
            top: 0;
            left: 510px;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            row-gap: 20px;

            .item-line {
                width: 20px;
                height: 20px;
                border-radius: 50%;
                background: #fff;
            }
        }
    }
}
</style>
