import Logo from "../assets/company/parimatch.png";
import bg from "../assets/company/bg.png";
import person from "../assets/company/person.png";
import Mastercard from "../assets/offers/mastercard.png";
import American from "../assets/offers/american_express.png";
import Discover from "../assets/offers/discover.png";
import Jcb from "../assets/offers/jcb.png";
import Maestro from "../assets/offers/maestro.png";
import Union from "../assets/offers/union_pay.png";
import Windows from "../assets/company/Windows.png";
import Android from "../assets/company/Android.png";
import Apple from "../assets/company/Apple.png";
import Calendar from "../assets/company/Calendar.png";
import Location from "../assets/company/Location.png";
import Shield from "../assets/company/Shield.png";
import Server from "../assets/company/Server.png";
import Phone from "../assets/company/Phone.png";

export const companyData = {
    card: {
        name: "PariMatch",
        logo: Logo,
        rating: "5.0",
        features: [
            "Lorem ipsum dolor sit consectetur",
            "Lorem ipsum dolor sit consectetur",
            "Lorem ipsum dolor sit consectetur",
            "Lorem ipsum dolor sit consectetur",
            "Lorem ipsum dolor sit consectetur",
            "Lorem ipsum dolor sit consectetur",
        ],
        payment: [
            {
                link: "#",
                name: "Mastercard",
                logo: Mastercard,
            },
            {
                link: "#",
                name: "Discover",
                logo: Discover,
            },
            {
                link: "#",
                name: "American Express",
                logo: American,
            },
            {
                link: "#",
                name: "Maestro",
                logo: Maestro,
            },
            {
                link: "#",
                name: "Union pay",
                logo: Union,
            },
            {
                link: "#",
                name: "Jcb",
                logo: Jcb,
            },
            {
                link: "#",
                name: "American Express2",
                logo: American,
            },
            {
                link: "#",
                name: "Maestro2",
                logo: Maestro,
            },
        ],
        bonus: {
            title: "100% Up to 500 $",
            description:
                "Lorem ipsum dolor sit amet consectetur adipiscing elit lacus tempor, vulputate id fames pulvinar curabitur faucibus.",
            bg: bg,
        },

        filters: [
            {
                link: "#",
                name: "Beting",
            },
            {
                link: "#",
                name: "Casino",
            },
            {
                link: "#",
                name: "Live Games",
            },
            {
                link: "#",
                name: "Fast Games",
            },
        ],

        systems: [
            {
                name: "Windows",
                logo: Windows,
                isAllowed: false,
            },
            {
                name: "Android",
                logo: Android,
                isAllowed: true,
            },
            {
                name: "Apple",
                logo: Apple,
                isAllowed: true,
            },
        ],
    },

    details: [
        {
            ico: Calendar,
            title: "Foundation",
            text: "1994",
        },
        {
            ico: Shield,
            title: "Licensed",
            text: "Curaso GLH-OCCHKTW0706292016",
        },
        {
            ico: Phone,
            title: "Apps",
            text: "IOS, Android, Windows",
        },
        {
            ico: Location,
            title: "Country",
            text: "Europe, Russia, North American",
        },
        {
            ico: Server,
            title: "Apps",
            text: "IOS, Android, Windows",
        },
    ],

    comment: {
        img: person,
        title: "Parimatch",
        subtitle: "Comment from author",
        message: "Lorem ipsum dolor sit amet consectetur adipiscing elit lacus tempor quis volutpat integer lacinia montes nisl, class quisque leo consequat sed lobortis proin suscipit vulputate id fames pulvinar curabitur faucibus. Lorem ipsum dolor sit amet consectetur adipiscing elit lacus tempor quis volutpat integer lacinia montes nisl, class quisque leo consequat sed lobortis proin suscipit vulputate id fames pulvinar curabitur faucibus. Lorem ipsum dolor sit amet consectetur adipiscing elit lacus tempor quis volutpat integer lacinia montes nisl, class quisque leo consequat sed lobortis proin suscipit vulputate id fames pulvinar curabitur faucibus.",
    }
};
