<template>
    <a :href="href">
        <button :class="classes">
            <span>{{ label }}</span>

            <ion-icon v-if="ionIconName" :name="ionIconName" :aria-hidden="isAriaHidden"></ion-icon>
        </button>
    </a>
</template>

<script>
export default {
    name: 'MainButton',
    props: {
        label: {
            type: String,
            default: ''
        },
        ionIconName: {
            type: String,
            default: ''
        },
        isAriaHidden: {
            type: String,
            default: 'false'
        },
        href: {
            type: String,
            default: '#'
        },
        classes: {
            type: String,
            default: 'btn btn-primary'
        }
    }
}
</script>