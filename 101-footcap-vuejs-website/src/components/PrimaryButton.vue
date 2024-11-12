<template>
    <button class="btn btn-primary">
        <span>{{ label }}</span>

        <ion-icon v-if="ionIconName" :name="ionIconName" :aria-hidden="isAriaHidden"></ion-icon>
    </button>
</template>

<script>
export default {
    name: 'PrimaryButton',
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
        }
    }
}
</script>