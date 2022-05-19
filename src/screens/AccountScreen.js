import React from 'react'
import { View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { InputText, InputUpload, Layout } from '../components'
import { strings } from '../constants'

export default function AccountScreen() {
    return (
        <Layout
            title={strings.account}
        >
            <KeyboardAwareScrollView>
                <View>
                    <InputUpload />
                    <InputText
                        label={strings.name}
                        placeholder={strings.name_placeholder}
                    />
                    <InputText
                        label={strings.contact_no}
                        placeholder={strings.contact_no_placeholder}
                    />
                    <InputText
                        label={strings.email}
                        placeholder={strings.email_placeholder}
                    />
                    <InputText
                        label={strings.name_of_head}
                        placeholder={strings.name_of_head_placeholder}
                    />
                    <InputText
                        label={strings.selesperson_id}
                        placeholder={strings.selesperson_id_placeholder}
                    />
                </View>
            </KeyboardAwareScrollView>
        </Layout>
    )
}