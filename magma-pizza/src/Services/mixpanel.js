import mixpanel from "mixpanel-browser";

mixpanel.init(process.env.REACT_APP_MIXPANEL_TOKEN);

const Mixpanel = {
    identify: (id) => {
        mixpanel.identify(id);
    },
    alias: (id) => {
        mixpanel.alias(id);
    },
    track: (name, props) => {
        mixpanel.track(name, props);
    },
    people: {
        set: (props) => {
            mixpanel.people.set(props);
        }
    },
    TYPES: {
        GO_TO_LOGIN: "GO_TO_LOGIN",
        SUCCESSFULLY_LOGIN: "SUCCESSFULLY_LOGIN",
        CLOSE_SESSION: "CLOSE_SESSION",
        GO_TO_MENU_PIZZA: "GO_TO_MENU_PIZZA",
        GO_TO_MENU_BEBIDAS: "GO_TO_MENU_BEBIDAS",
        GO_TO_MENU_POSTRES: "GO_TO_MENU_POSTRES",
        GO_TO_MENU_ACOMPAÑAMIENTOS: "GO_TO_MENU_ACOMPAÑAMIENTOS",
        GO_TO_MENU_PROMOS: "GO_TO_MENU_PROMOS",
        GO_TO_CREATE_PIZZA: "GO_TO_CREATE_PIZZA",
        GO_TO_ABOUT_US: "GO_TO_ABOUT_US",
        GO_TO_CONTACT_US: "GO_TO_CONTACT_US",
        GO_TO_CART: "GO_TO_CART"
    }
};

export default Mixpanel;