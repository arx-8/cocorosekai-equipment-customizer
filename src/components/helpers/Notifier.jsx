/* eslint-disable */
// @ts-ignore
import { withSnackbar } from "notistack"
import { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { noticeOperations } from "src/store/notice"

/**
 * TODO refactoring
 * @see https://iamhosseindhv.com/notistack/demos#redux-/-mobx-example
 */
class _Notifier extends Component {
  displayed = []

  storeDisplayed = (id) => {
    this.displayed = [...this.displayed, id]
  }

  removeDisplayed = (id) => {
    this.displayed = this.displayed.filter((key) => id !== key)
  }

  componentDidUpdate() {
    const { notifications = [] } = this.props

    notifications.forEach(
      ({ key, message, options = {}, dismissed = false }) => {
        if (dismissed) {
          this.props.closeSnackbar(key)
          return
        }

        // Do nothing if snackbar is already displayed
        if (this.displayed.includes(key)) return

        // Display snackbar using notistack
        this.props.enqueueSnackbar(message, {
          key,
          ...options,
          onClose: (event, reason, key) => {
            if (options.onClose) {
              options.onClose(event, reason, key)
            }
          },
          onExited: (event, key) => {
            this.props.removeSnackbar(key)
            this.removeDisplayed(key)
          },
        })

        // Keep track of snackbars that we've displayed
        this.storeDisplayed(key)
      }
    )
  }

  render() {
    return null
  }
}

const mapStateToProps = (store) => ({
  notifications: store.notice.notifications,
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    { removeSnackbar: noticeOperations.removeNotification },
    dispatch
  )

export const Notifier = withSnackbar(
  connect(mapStateToProps, mapDispatchToProps)(_Notifier)
)

/**
 * Not working ... 8-(((

import { WithSnackbarProps, withSnackbar } from "notistack"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { noticeOperations } from "src/store/notice"
import { RootState } from "src/store/store"

type OwnProps = {
  children?: never
}

type Props = OwnProps & WithSnackbarProps

const _Notifier: React.FC<Props> = ({ enqueueSnackbar }) => {
  const dispatch = useDispatch()
  const notifications = useSelector(
    (state: RootState) => state.notice.notifications
  )

  const [displayed, setDisplayed] = useState<(string | number)[]>([])

  useEffect(() => {
    notifications.forEach((n) => {
      if (n.dismissed) {
        dispatch(noticeOperations.closeNotification(n.key))
        return
      }

      // Do nothing if snackbar is already displayed
      if (displayed.includes(n.key)) {
        return
      }

      // Display snackbar using notistack
      enqueueSnackbar(n.message, {
        ...n.options,
        onClose: () => {
          console.log("onClose called")
        },
        onExited: () => {
          console.log("onExited called")
          noticeOperations.removeNotification(n.key)
          setDisplayed(displayed.filter((d) => d !== n.key))
        },
      })

      // Keep track of snackbars that we've displayed
      setDisplayed([...displayed, n.key])
    })
  }, [dispatch, displayed, enqueueSnackbar, notifications])

  return null
}

export const Notifier = withSnackbar(_Notifier)

*/
