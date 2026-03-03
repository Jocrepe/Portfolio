import { ref, onMounted } from "vue"

export const usePageLoading = (options = {}) => {
    const loading = ref(true)
    const show = ref(false)

    const {
        minDelay = 300,
        timeout = 6000
    } = options

    let finished = false
    let timeoutId = null

    const done = () => {
        if (finished) return
        finished = true

        clearTimeout(timeoutId)

        setTimeout(() => {
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    loading.value = false
                    show.value = true
                })
            })
        }, minDelay)
    }

    onMounted(() => {
        timeoutId = setTimeout(() => {
            if (!finished) {
                console.warn('[usePageLoading] timeout fallback')
                done()
            }
        }, timeout)
    })

    onBeforeUnmount(() => {
        clearTimeout(timeoutId)
    })

    return {
        loading,
        show,
        done
    }
}