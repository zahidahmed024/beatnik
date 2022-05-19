import { icons } from "../assets";
import { colors } from "../constants";

export const customerChartData = [
    { value: 60, frontColor: colors.danger, status: 'Premium pending' },
    { value: 110, frontColor: colors.secondary, status: 'Regular customer' },
    { value: 50, frontColor: colors.primary, status: 'Payment pending' },
    { value: 100, frontColor: colors.text, status: 'Puchased' },
    { value: 150, frontColor: colors.primary, status: 'Recommanded' },
    { value: 200, frontColor: colors.warning, status: 'Registered' },
];

export const pieData = [
    { value: 70, color: colors.secondary },
    { value: 30, color: colors.danger }
];
export const performanceData = [
    {
        id: '1',
        value: 40,
        label: 'Jan',
        price: '40k'
    },
    {
        id: '2',
        value: 50,
        label: 'Feb',
        price: '80k'
    },
    {
        id: '3',
        value: 34,
        label: 'Jan',
        price: '40k'
    },
    {
        id: '3',
        value: 34,
        label: 'Jan',
        price: '40k'
    },
    {
        id: '3',
        value: 34,
        label: 'Jan',
        price: '40k'
    },
    {
        id: '3',
        value: 34,
        label: 'Jan',
        price: '40k'
    },

]

export const policyListData = [
    {
        id: 1,
        img: icons.peace,
        title: 'Nischinto Shobai',
        isNew: true,
        coverage: "BDT 320,500",
        term: "365 Days",
        members: "Self, Spouse & Children",
        Premium: "BDT 500",
    },
    {
        id: 2,
        img: icons.treehouse,
        title: 'Shanti-Amra Shobai',
        isNew: false,
        coverage: "BDT 320,500",
        term: "365 Days",
        members: "Self, Spouse & Children",
        Premium: "BDT 500",
    },
    {
        id: 3,
        img: icons.peace,
        title: 'Nischinto Shobai',
        isNew: true,
        coverage: "BDT 320,500",
        term: "365 Days",
        members: "Self, Spouse & Children",
        Premium: "BDT 500",
    },
    {
        id: 4,
        img: icons.treehouse,
        title: 'Shanti-Amra Shobai',
        isNew: false,
        coverage: "BDT 320,500",
        term: "365 Days",
        members: "Self, Spouse & Children",
        Premium: "BDT 500",
    },
    {
        id: 5,
        img: icons.peace,
        title: 'Nischinto Shobai',
        isNew: false,
        coverage: "BDT 320,500",
        term: "365 Days",
        members: "Self, Spouse & Children",
        Premium: "BDT 500",
    },
]
