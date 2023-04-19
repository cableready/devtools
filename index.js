import devtools from '@turbo-boost/devtools'
import { Devtool } from '@turbo-boost/devtools'

function initialize () {
  document.addEventListener('turbo-boost:devtools-start', () =>
    Devtool.register('updates-for', 'updates-for')
  )

  window.CableReady.devtools = devtools

  document.addEventListener('turbo:load', () => {
    document.querySelectorAll('cable-ready-updates-for').forEach(element => {
      Object.assign(element, {
        initializeDevtool () {
          const mouseenter = () => this.devtool.show()

          addEventListener('turbo-boost:devtools-start', () => {
            this.devtool = new Devtool(this)
            this.addEventListener('mouseenter', mouseenter)
          })

          addEventListener('turbo-boost:devtools-stop', () => {
            this.removeEventListener('mouseenter', mouseenter)
            this.devtool.hide({ active: false })
            this.devtool.unregisterEventListeners()
            delete this.devtool
          })

          this.dispatchEvent(
            new CustomEvent('turbo-boost:devtools-connect', { bubbles: true })
          )
        },

        name: 'updates-for',
        targetLineLabel: 'updates',

        get triggerElement () {
          return element
        },

        // the morph element
        get morphElement () {
          return element
        },

        // the target element
        get targetElement () {
          return element
        },

        triggerTooltipData: {
          subtitle: `
            <b>identifier</b>: ${element.identifier}<br>
            <b>only</b>: ${element.getAttribute('only') || ''}<br>
            <b>url</b>: ${element.getAttribute('url') || location.href}<br>
            <b>debounce (client-side)</b>: ${element.debounce}<br>
            <b>ignore-inner-updates</b>: ${element.hasAttribute(
              'ignore-inner-updates'
            )}
          `
        },

        targetTooltipData: {
          subtitle: `
            <b>identifier</b>: ${element.identifier}<br>
            <b>query</b>: ${element.query}
          `
        }
      })

      element.initializeDevtool()
    })
  })

  CableReady.devtools.start()
}

export default { initialize }
