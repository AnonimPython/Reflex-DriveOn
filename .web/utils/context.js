import { createContext, useContext, useMemo, useReducer, useState } from "react"
import { applyDelta, Event, hydrateClientStorage, useEventLoop, refs } from "$/utils/state.js"

export const initialState = {"reflex___state____state": {"id": "", "is_hydrated": false, "router": {"session": {"client_token": "", "client_ip": "", "session_id": ""}, "headers": {"host": "", "origin": "", "upgrade": "", "connection": "", "cookie": "", "pragma": "", "cache_control": "", "user_agent": "", "sec_websocket_version": "", "sec_websocket_key": "", "sec_websocket_extensions": "", "accept_encoding": "", "accept_language": ""}, "page": {"host": "", "path": "", "raw_path": "", "full_path": "", "full_raw_path": "", "params": {}}}}, "reflex___state____state.drive_on___state____user_data": {"is_authenticated": false, "mail": "", "phone": "", "username": ""}, "reflex___state____state.drive_on___state____user_data.drive_on___pages___login____login_user": {"error": "", "form_data": {}}, "reflex___state____state.drive_on___state____user_data.drive_on___pages___register____register": {"confirm_password": "", "form_mail": "", "form_username": "", "password": ""}, "reflex___state____state.drive_on___pages___profile____support_state": {"form_data": {}}, "reflex___state____state.drive_on___backend___carapplication____get_all_rentals": {"rentals": []}, "reflex___state____state.reflex___state____on_load_internal_state": {}, "reflex___state____state.drive_on___pages___car_detail____cond_complex_state": {"base_price": 0, "days": 1, "price": 0}, "reflex___state____state.drive_on___pages___car_detail____car_detail_state": {"car": null, "is_loading": false}, "reflex___state____state.reflex___state____update_vars_internal_state": {}, "reflex___state____state.drive_on___pages___main____cars_db_state": {"cars": []}, "reflex___state____state.drive_on___backend___add_car____add_car_state": {"acceleration_to_100": 0, "car_height": 0, "car_length": 0, "car_model": "", "car_width": 0, "company": "", "doors": 0, "horse_power": 0, "image": "", "price": 0, "seats": 0}, "reflex___state____state.reflex___state____frontend_event_exception_state": {}, "reflex___state____state.drive_on___pages___main____filter_buttons_state": {}}

export const defaultColorMode = "dark"
export const ColorModeContext = createContext(null);
export const UploadFilesContext = createContext(null);
export const DispatchContext = createContext(null);
export const StateContexts = {
  reflex___state____state: createContext(null),
  reflex___state____state__drive_on___state____user_data: createContext(null),
  reflex___state____state__drive_on___state____user_data__drive_on___pages___login____login_user: createContext(null),
  reflex___state____state__drive_on___state____user_data__drive_on___pages___register____register: createContext(null),
  reflex___state____state__drive_on___pages___profile____support_state: createContext(null),
  reflex___state____state__drive_on___backend___carapplication____get_all_rentals: createContext(null),
  reflex___state____state__reflex___state____on_load_internal_state: createContext(null),
  reflex___state____state__drive_on___pages___car_detail____cond_complex_state: createContext(null),
  reflex___state____state__drive_on___pages___car_detail____car_detail_state: createContext(null),
  reflex___state____state__reflex___state____update_vars_internal_state: createContext(null),
  reflex___state____state__drive_on___pages___main____cars_db_state: createContext(null),
  reflex___state____state__drive_on___backend___add_car____add_car_state: createContext(null),
  reflex___state____state__reflex___state____frontend_event_exception_state: createContext(null),
  reflex___state____state__drive_on___pages___main____filter_buttons_state: createContext(null),
}
export const EventLoopContext = createContext(null);
export const clientStorage = {"cookies": {}, "local_storage": {"reflex___state____state.drive_on___state____user_data.username": {"name": "username", "sync": false}, "reflex___state____state.drive_on___state____user_data.mail": {"name": "mail", "sync": false}, "reflex___state____state.drive_on___state____user_data.phone": {"name": "phone", "sync": false}}, "session_storage": {}}

export const state_name = "reflex___state____state"

export const exception_state_name = "reflex___state____state.reflex___state____frontend_event_exception_state"

// These events are triggered on initial load and each page navigation.
export const onLoadInternalEvent = () => {
    const internal_events = [];

    // Get tracked cookie and local storage vars to send to the backend.
    const client_storage_vars = hydrateClientStorage(clientStorage);
    // But only send the vars if any are actually set in the browser.
    if (client_storage_vars && Object.keys(client_storage_vars).length !== 0) {
        internal_events.push(
            Event(
                'reflex___state____state.reflex___state____update_vars_internal_state.update_vars_internal',
                {vars: client_storage_vars},
            ),
        );
    }

    // `on_load_internal` triggers the correct on_load event(s) for the current page.
    // If the page does not define any on_load event, this will just set `is_hydrated = true`.
    internal_events.push(Event('reflex___state____state.reflex___state____on_load_internal_state.on_load_internal'));

    return internal_events;
}

// The following events are sent when the websocket connects or reconnects.
export const initialEvents = () => [
    Event('reflex___state____state.hydrate'),
    ...onLoadInternalEvent()
]

export const isDevMode = true

export const lastCompiledTimeStamp = "2025-02-01 00:56:21.634715"

export function UploadFilesProvider({ children }) {
  const [filesById, setFilesById] = useState({})
  refs["__clear_selected_files"] = (id) => setFilesById(filesById => {
    const newFilesById = {...filesById}
    delete newFilesById[id]
    return newFilesById
  })
  return (
    <UploadFilesContext.Provider value={[filesById, setFilesById]}>
      {children}
    </UploadFilesContext.Provider>
  )
}

export function EventLoopProvider({ children }) {
  const dispatch = useContext(DispatchContext)
  const [addEvents, connectErrors] = useEventLoop(
    dispatch,
    initialEvents,
    clientStorage,
  )
  return (
    <EventLoopContext.Provider value={[addEvents, connectErrors]}>
      {children}
    </EventLoopContext.Provider>
  )
}

export function StateProvider({ children }) {
  const [reflex___state____state, dispatch_reflex___state____state] = useReducer(applyDelta, initialState["reflex___state____state"])
  const [reflex___state____state__drive_on___state____user_data, dispatch_reflex___state____state__drive_on___state____user_data] = useReducer(applyDelta, initialState["reflex___state____state.drive_on___state____user_data"])
  const [reflex___state____state__drive_on___state____user_data__drive_on___pages___login____login_user, dispatch_reflex___state____state__drive_on___state____user_data__drive_on___pages___login____login_user] = useReducer(applyDelta, initialState["reflex___state____state.drive_on___state____user_data.drive_on___pages___login____login_user"])
  const [reflex___state____state__drive_on___state____user_data__drive_on___pages___register____register, dispatch_reflex___state____state__drive_on___state____user_data__drive_on___pages___register____register] = useReducer(applyDelta, initialState["reflex___state____state.drive_on___state____user_data.drive_on___pages___register____register"])
  const [reflex___state____state__drive_on___pages___profile____support_state, dispatch_reflex___state____state__drive_on___pages___profile____support_state] = useReducer(applyDelta, initialState["reflex___state____state.drive_on___pages___profile____support_state"])
  const [reflex___state____state__drive_on___backend___carapplication____get_all_rentals, dispatch_reflex___state____state__drive_on___backend___carapplication____get_all_rentals] = useReducer(applyDelta, initialState["reflex___state____state.drive_on___backend___carapplication____get_all_rentals"])
  const [reflex___state____state__reflex___state____on_load_internal_state, dispatch_reflex___state____state__reflex___state____on_load_internal_state] = useReducer(applyDelta, initialState["reflex___state____state.reflex___state____on_load_internal_state"])
  const [reflex___state____state__drive_on___pages___car_detail____cond_complex_state, dispatch_reflex___state____state__drive_on___pages___car_detail____cond_complex_state] = useReducer(applyDelta, initialState["reflex___state____state.drive_on___pages___car_detail____cond_complex_state"])
  const [reflex___state____state__drive_on___pages___car_detail____car_detail_state, dispatch_reflex___state____state__drive_on___pages___car_detail____car_detail_state] = useReducer(applyDelta, initialState["reflex___state____state.drive_on___pages___car_detail____car_detail_state"])
  const [reflex___state____state__reflex___state____update_vars_internal_state, dispatch_reflex___state____state__reflex___state____update_vars_internal_state] = useReducer(applyDelta, initialState["reflex___state____state.reflex___state____update_vars_internal_state"])
  const [reflex___state____state__drive_on___pages___main____cars_db_state, dispatch_reflex___state____state__drive_on___pages___main____cars_db_state] = useReducer(applyDelta, initialState["reflex___state____state.drive_on___pages___main____cars_db_state"])
  const [reflex___state____state__drive_on___backend___add_car____add_car_state, dispatch_reflex___state____state__drive_on___backend___add_car____add_car_state] = useReducer(applyDelta, initialState["reflex___state____state.drive_on___backend___add_car____add_car_state"])
  const [reflex___state____state__reflex___state____frontend_event_exception_state, dispatch_reflex___state____state__reflex___state____frontend_event_exception_state] = useReducer(applyDelta, initialState["reflex___state____state.reflex___state____frontend_event_exception_state"])
  const [reflex___state____state__drive_on___pages___main____filter_buttons_state, dispatch_reflex___state____state__drive_on___pages___main____filter_buttons_state] = useReducer(applyDelta, initialState["reflex___state____state.drive_on___pages___main____filter_buttons_state"])
  const dispatchers = useMemo(() => {
    return {
      "reflex___state____state": dispatch_reflex___state____state,
      "reflex___state____state.drive_on___state____user_data": dispatch_reflex___state____state__drive_on___state____user_data,
      "reflex___state____state.drive_on___state____user_data.drive_on___pages___login____login_user": dispatch_reflex___state____state__drive_on___state____user_data__drive_on___pages___login____login_user,
      "reflex___state____state.drive_on___state____user_data.drive_on___pages___register____register": dispatch_reflex___state____state__drive_on___state____user_data__drive_on___pages___register____register,
      "reflex___state____state.drive_on___pages___profile____support_state": dispatch_reflex___state____state__drive_on___pages___profile____support_state,
      "reflex___state____state.drive_on___backend___carapplication____get_all_rentals": dispatch_reflex___state____state__drive_on___backend___carapplication____get_all_rentals,
      "reflex___state____state.reflex___state____on_load_internal_state": dispatch_reflex___state____state__reflex___state____on_load_internal_state,
      "reflex___state____state.drive_on___pages___car_detail____cond_complex_state": dispatch_reflex___state____state__drive_on___pages___car_detail____cond_complex_state,
      "reflex___state____state.drive_on___pages___car_detail____car_detail_state": dispatch_reflex___state____state__drive_on___pages___car_detail____car_detail_state,
      "reflex___state____state.reflex___state____update_vars_internal_state": dispatch_reflex___state____state__reflex___state____update_vars_internal_state,
      "reflex___state____state.drive_on___pages___main____cars_db_state": dispatch_reflex___state____state__drive_on___pages___main____cars_db_state,
      "reflex___state____state.drive_on___backend___add_car____add_car_state": dispatch_reflex___state____state__drive_on___backend___add_car____add_car_state,
      "reflex___state____state.reflex___state____frontend_event_exception_state": dispatch_reflex___state____state__reflex___state____frontend_event_exception_state,
      "reflex___state____state.drive_on___pages___main____filter_buttons_state": dispatch_reflex___state____state__drive_on___pages___main____filter_buttons_state,
    }
  }, [])

  return (
    <StateContexts.reflex___state____state.Provider value={ reflex___state____state }>
    <StateContexts.reflex___state____state__drive_on___state____user_data.Provider value={ reflex___state____state__drive_on___state____user_data }>
    <StateContexts.reflex___state____state__drive_on___state____user_data__drive_on___pages___login____login_user.Provider value={ reflex___state____state__drive_on___state____user_data__drive_on___pages___login____login_user }>
    <StateContexts.reflex___state____state__drive_on___state____user_data__drive_on___pages___register____register.Provider value={ reflex___state____state__drive_on___state____user_data__drive_on___pages___register____register }>
    <StateContexts.reflex___state____state__drive_on___pages___profile____support_state.Provider value={ reflex___state____state__drive_on___pages___profile____support_state }>
    <StateContexts.reflex___state____state__drive_on___backend___carapplication____get_all_rentals.Provider value={ reflex___state____state__drive_on___backend___carapplication____get_all_rentals }>
    <StateContexts.reflex___state____state__reflex___state____on_load_internal_state.Provider value={ reflex___state____state__reflex___state____on_load_internal_state }>
    <StateContexts.reflex___state____state__drive_on___pages___car_detail____cond_complex_state.Provider value={ reflex___state____state__drive_on___pages___car_detail____cond_complex_state }>
    <StateContexts.reflex___state____state__drive_on___pages___car_detail____car_detail_state.Provider value={ reflex___state____state__drive_on___pages___car_detail____car_detail_state }>
    <StateContexts.reflex___state____state__reflex___state____update_vars_internal_state.Provider value={ reflex___state____state__reflex___state____update_vars_internal_state }>
    <StateContexts.reflex___state____state__drive_on___pages___main____cars_db_state.Provider value={ reflex___state____state__drive_on___pages___main____cars_db_state }>
    <StateContexts.reflex___state____state__drive_on___backend___add_car____add_car_state.Provider value={ reflex___state____state__drive_on___backend___add_car____add_car_state }>
    <StateContexts.reflex___state____state__reflex___state____frontend_event_exception_state.Provider value={ reflex___state____state__reflex___state____frontend_event_exception_state }>
    <StateContexts.reflex___state____state__drive_on___pages___main____filter_buttons_state.Provider value={ reflex___state____state__drive_on___pages___main____filter_buttons_state }>
      <DispatchContext.Provider value={dispatchers}>
        {children}
      </DispatchContext.Provider>
    </StateContexts.reflex___state____state__drive_on___pages___main____filter_buttons_state.Provider>
    </StateContexts.reflex___state____state__reflex___state____frontend_event_exception_state.Provider>
    </StateContexts.reflex___state____state__drive_on___backend___add_car____add_car_state.Provider>
    </StateContexts.reflex___state____state__drive_on___pages___main____cars_db_state.Provider>
    </StateContexts.reflex___state____state__reflex___state____update_vars_internal_state.Provider>
    </StateContexts.reflex___state____state__drive_on___pages___car_detail____car_detail_state.Provider>
    </StateContexts.reflex___state____state__drive_on___pages___car_detail____cond_complex_state.Provider>
    </StateContexts.reflex___state____state__reflex___state____on_load_internal_state.Provider>
    </StateContexts.reflex___state____state__drive_on___backend___carapplication____get_all_rentals.Provider>
    </StateContexts.reflex___state____state__drive_on___pages___profile____support_state.Provider>
    </StateContexts.reflex___state____state__drive_on___state____user_data__drive_on___pages___register____register.Provider>
    </StateContexts.reflex___state____state__drive_on___state____user_data__drive_on___pages___login____login_user.Provider>
    </StateContexts.reflex___state____state__drive_on___state____user_data.Provider>
    </StateContexts.reflex___state____state.Provider>
  )
}