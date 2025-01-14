<script lang="ts">
import { ref, reactive, onMounted, defineComponent, computed, watch } from 'vue'
import type { Ref } from 'vue'

export default defineComponent({
    props: {
        data: {
            type: Object
        },
        changeMark: {
            type: Boolean
        }
    },
    components: {},
    emits: [],
    setup(props, { emit }) {
        let poke: any = reactive(props.data || {})

        onMounted(() => { })

        watch(
            () => props.changeMark,
            (newValue, oldValue) => {
                poke = reactive(props.data || {})
            }
        )

        const changeShape = (shape: any) => {
            Object.assign(poke, shape)
        }

        return {
            poke,
            changeShape
        }
    }
})
</script>

<template>
    <div class="poke-item">
        <div class="item-content">
            <div class="item-infos" :class="poke.types[0]"
                :style="`background-image: url(/docs/pokemons/bg/${poke.types[0]}.png)`">
                <div class="item-titles">
                    <h3>{{ poke.name }}</h3>
                </div>
                <img class="item-img" v-bind:src="`/docs/pokemons/pokes/${poke.img}.png`"
                    v-bind:class="'item-' + poke.shape" alt="" srcset="">
                <img class="item-gif" v-bind:src="`/docs/pokemons/pokes/${poke.img}.gif`" alt="" srcset="">
            </div>
            <div class="item-no">
                <h3>#{{ poke.no }}</h3>
            </div>
            <div class="item-types">
                <img class="item-type" v-for="type in poke.types" v-bind:src="'/docs/pokemons/types/' + type + '.png'">
            </div>
        </div>
        <div class="item-shapes">
            <img class="item-shape" v-for="shape in poke.shapes"
                v-bind:src="'/docs/pokemons/shapes/' + shape.shape + '.png'" v-on:click="changeShape(shape)" alt=""
                srcset="">
        </div>
    </div>
</template>

<style scoped lang="scss">
.poke-item {
    position: relative;
    width: 200px;
    height: 200px;

    .item-types {
        position: absolute;
        right: -10px;
        top: -15px;
        display: flex;
        column-gap: 3px;

        .item-type {
            width: 40px;
            border: 5px solid #000;
            border-radius: 50%;
        }

    }

    .item-content {
        position: relative;
        width: 200px;
        height: 200px;
        padding: 6px;
        border: 7px solid #000;
        background: #fff;
        box-shadow: 10px 1px 10px rgba(0, 0, 0, 0.3);
    }

    .item-no {
        position: absolute;
        left: 12px;
        top: 45px;
        color: #fff;
        font-size: 19px;
    }

    .item-infos {
        position: relative;
        width: 100%;
        height: 100%;
        color: #fff;
        border: 4px solid #000;
        border-radius: 10px;
        background: #d3da51;
        background-size: 100% 100%;

        .item-titles {
            padding: 2px 5px;
            color: #fff;
            font-weight: 700;
            border-radius: 5px 5px 0 0;
            border-bottom: 4px solid #000;
        }

        &.Bug {
            .item-titles {
                background: #91a119;
            }
        }

        &.Dark {
            .item-titles {
                background: #50413f;
            }
        }

        &.Dragon {
            .item-titles {
                background: #5060e1;
            }
        }

        &.Electric {
            .item-titles {
                background: #fac000;
            }
        }

        &.Fairy {
            .item-titles {
                background: #ef70ef;
            }
        }

        &.Fighting {
            .item-titles {
                background: #ff8000;
            }
        }

        &.Fire {
            .item-titles {
                background: #e62829;
            }
        }

        &.Flying {
            .item-titles {
                background: #81b9ef;
            }
        }

        &.Ghost {
            .item-titles {
                background: #704170;
            }
        }

        &.Grass {
            .item-titles {
                background: #3fa129;
            }
        }

        &.Ground {
            .item-titles {
                background: #915121;
            }
        }

        &.Ice {
            .item-titles {
                background: #3fd8ff;
            }
        }


        &.Normal {
            .item-titles {
                background: #9fa19f;
            }
        }

        &.Poison {
            .item-titles {
                background: #9141cb;
            }
        }

        &.Psychic {
            .item-titles {
                background: #ef4179;
            }
        }

        &.Rock {
            .item-titles {
                background: #afa981;
            }
        }

        &.Steel {
            .item-titles {
                background: #60a1b8;
            }
        }

        &.Water {
            .item-titles {
                background: #2980ef;
            }
        }

    }

    .item-img {
        position: absolute;
        bottom: 0px;
        right: -20px;
        width: 155px;
        height: 155px !important;
        object-fit: cover;
        z-index: 1;

        &.item-dynamax {
            transform: scale(1.1);
        }
    }

    .item-gif {
        position: absolute;
        bottom: 0;
        width: unset;
        height: 32px;
    }

    .item-infos:hover .item-img {
        animation: jump 1.5s infinite;
    }

    .item-shapes {
        cursor: pointer;
        position: absolute;
        bottom: 5px;
        right: 0px;
        display: flex;
        flex-direction: column;
        row-gap: 3px;
        opacity: 0;

        .item-shape {
            width: 25px;
            height: 25px;
            padding: 2px;
            border-bottom-right-radius: 10px;
            border: 2px solid #000;
            background: #fff;
        }
    }

    &:hover .item-shapes {
        animation: showShapes 0.6s forwards;
    }
}

@keyframes jump {
    0% {
        transform: translate(0px, 0px) rotateZ(0deg);
        animation-timing-function: ease-out;
    }

    30% {
        transform: translate(0px, -25px) rotateZ(8deg);
        animation-timing-function: ease-in;
    }

    50% {
        transform: translate(0px, 0px) rotateZ(0deg);
        animation-timing-function: ease-out;
    }

    70% {
        transform: translate(0px, -10px) rotateZ(-4deg);
        animation-timing-function: ease-in;
    }

    85% {
        transform: translate(0px, 0px) rotateZ(0deg);
    }

    100% {
        transform: translate(0px, 0px) rotateZ(0deg);
    }
}

@keyframes showShapes {
    0% {
        right: 0;
        opacity: 0;
    }

    100% {
        right: -22px;
        opacity: 1;
    }
}
</style>
