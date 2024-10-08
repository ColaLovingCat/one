<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import * as db from './datas'

import pokes from './pokes.vue'

onMounted(() => {
    datas.value = [...db.pokes]
    types.value = [...db.types]
})

const datas: any = ref([])
const dataShow = computed(() => {
    return datas.value
})

const changeShape = (no: number, shape: any) => {
    console.log('Testing: ', no, shape);
    let temp = datas.value.find((a: any) => a.no == no)
    if (temp) {
        Object.assign(temp, shape)
    }
}

const types: any = ref([])

const getStyle = (values: any) => {
    let result = {
        color: "#fff",
        background: '#c4cecf4d'
    }
    switch (values) {
        case 0: {
            result = {
                color: "#fff",
                background: '#9ca3af'
            }
            break;
        }
        case 0.5: {
            result = {
                color: "#fff",
                background: '#ef4444'
            }
            break;
        }
        case 2: {
            result = {
                color: "#fff",
                background: '#22c55e'
            }
            break;
        }
    }
    return result
}

</script>

<template>
    <div class="contents">
        <div class="list-pokes">
            <div v-for="(poke) in dataShow">
                <pokes :data="poke"></pokes>
            </div>
            <!-- <div class="poke-item" v-for="(poke) in dataShow">
                <div class="item-content">
                    <div class="item-infos" :class="poke.types[0]">
                        <div class="item-titles">
                            <h3>{{ poke.name }}</h3>
                            <h3>#{{ poke.no }}</h3>
                        </div>
                        <img class="item-img" v-bind:src="'/docs/pokemons/pokes/' + poke.img"
                            v-bind:class="'item-' + poke.shape" alt="" srcset="">
                    </div>
                    <div class="item-types">
                        <img class="item-type" v-for="type in poke.types"
                            v-bind:src="'/docs/pokemons/types/' + type + '.png'">
                    </div>
                </div>
                <div class="item-shapes">
                    <img class="item-shape" v-for="shape in poke.shapes"
                        v-bind:src="'/docs/pokemons/shapes/' + shape.shape + '.png'"
                        v-on:click="changeShape(poke.no, shape)" alt="" srcset="">
                </div>
            </div> -->
        </div>

        <div class="box-types">
            <table class="table-types">
                <thead>
                    <tr>
                        <th></th>
                        <th v-for="column in types" class="th-type">
                            <img class="td-type item-type" v-bind:src="'/docs/pokemons/types/' + column.type + '.png'">
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="row in types">
                        <td>
                            <img class="td-type item-type" v-bind:src="'/docs/pokemons/types/' + row.type + '.png'">
                        </td>
                        <td v-for="item in row.list" class="td-rate">
                            <div class="rate-item" :style="getStyle(item.rate)"> {{ item.rate }}</div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped lang="scss">
.contents {
    background: url(/docs/pokemons/systems/bg.jpg);
}

.list-pokes {
    display: flex;
    column-gap: 45px;
    row-gap: 35px;
    flex-wrap: wrap;
    justify-content: center;
}

.table-types {
    background: #0000008d;

    .th-type {
        padding: 0 5px;
    }

    .td-type {
        width: 40px;
        height: 40px;
    }

    .rate-item {
        width: 30px;
        height: 30px;
        margin: 0 auto;
        text-align: center;
        line-height: 30px;
        border-radius: 50%;
    }
}
</style>
