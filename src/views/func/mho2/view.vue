<script setup lang="ts">
import { ref, reactive, onMounted, computed, watch } from 'vue'
import type { Ref } from 'vue'
import * as db from './datas'

import monsters from './monster.vue'

onMounted(() => {
    datas.value = [...db.monsters]
})

const datas: any = ref([])
const dataShow = computed(() => {
    return datas.value
})
</script>

<template>
    <div class="contents">
        <div class="list-monster">
            <div v-for="(monster) in dataShow">
                <monsters :data="monster"></monsters>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.list-monster {
    display: flex;
    flex-wrap: wrap;
    column-gap: 15px;
    row-gap: 15px;
}
</style>
