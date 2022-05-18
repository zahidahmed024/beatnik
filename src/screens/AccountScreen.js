import React from 'react'
import { ScrollView } from 'react-native'
import { InputText, InputUpload, Layout } from '../components'

export default function AccountScreen() {
    return (
        <Layout>
            <ScrollView>
                <InputUpload />
                <InputText
                    label="Name"
                    placeholder="Enter your name"
                />
                <InputText
                    label="Contact no"
                    placeholder="Enter your contact no"
                />
                <InputText
                    label="Email"
                    placeholder="Enter your email"
                />
                <InputText
                    label="Name of Head"
                    placeholder="Enter your name of head"
                />
                <InputText
                    label="Salesperson ID"
                    placeholder="Enter your salesperson ID"
                />
            </ScrollView>
        </Layout>
    )
}