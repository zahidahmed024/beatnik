import React from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import { icons } from '../../assets'
import { colors, fontSizes, strings } from '../../constants'
import { policyListData } from '../../data'
import { ms, vs } from '../../utils'
import { GradientButton } from '../common'

export default function PolicyFlatlist() {
    return (
        <FlatList
            style={styles.flatStyle}
            data={policyListData}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
                <RenderItem
                    img={item.img}
                    title={item.title}
                    isNew={item.isNew}
                    coverage={item.coverage}
                    term={item.term}
                    members={item.members}
                    Premium={item.Premium}
                />
            )}
            keyExtractor={item => item.id}
        />
    )
}

function RenderItem({ img, title, isNew, coverage, term, members, Premium }) {
    return (
        <View
            style={styles.renderItemContainer}>
            <View style={styles.upperContainer}>
                <View style={styles.firstRow}>
                    <Image
                        style={{
                            width: 30,
                            height: 30
                        }}
                        source={img}
                    />
                    <Text style={styles.itemHeaderText}>
                        {title}
                    </Text>
                </View>
                {
                    isNew && (
                        <Image
                            style={styles.new}
                            source={icons.new}
                        />)
                }
            </View>

            {/* ////////////////middle section////// */}

            <View style={styles.secondSection}>
                <KeyValueItem text={strings.coverage} value={coverage} />
                <KeyValueItem text={strings.term} value={term} />
                <KeyValueItem text={strings.members} value={members} />
                <KeyValueItem text={strings.premium} value={Premium} />
            </View>


            {/* /////buttons//// */}
            <View style={styles.buttonsContainer} >
                <View style={{
                    borderBottomWidth: 1,
                    borderBottomColor: colors.primary
                }}>
                    <Text
                        style={styles.compareText}
                    >{strings.add_to_compare}</Text>
                </View>
                <GradientButton isGradient={false} title={'View Details'} />
                <GradientButton title={'Purchase'} />
            </View>
        </View >

    )
}

function KeyValueItem({ text, value }) {
    return (
        <View style={{ flex: 1 / 4, alignItems: 'center' }}>
            <View>
                <Text style={{
                    ...fontSizes.h6,
                    fontWeight: '500',
                    marginBottom: vs(5),
                }}>{text}</Text>
                <Text
                    style={{
                        ...fontSizes.h7,
                        fontWeight: value.includes('BDT') ? '700' : '400',
                    }}
                >{value}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    flatStyle: {
        flex: 1,
        backgroundColor: colors.white,
    },
    renderItemContainer: {
        borderWidth: 1,
        backgroundColor: colors.white,
        borderColor: colors.border,
        padding: ms(10),
        borderRadius: ms(8),
        marginVertical: ms(10),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
    upperContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: ms(5),
        paddingBottom: ms(10),
    },
    firstRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemHeaderText: {
        paddingHorizontal: ms(20),
        ...fontSizes.h5,
        fontWeight: '600',
        color: colors.primary,
    },
    new: {
        justifyContent: 'flex-end',
        width: 54,
        height: 20,
        marginRight: -12,
        // marginTop: -29,
    },
    secondSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: vs(10),
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: colors.border,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: ms(14),
        alignItems: 'center'
    },
    compareText: {
        borderBottomWidth: .1,
        borderBottomColor: colors.primary,
        ...fontSizes.h6,
        fontWeight: '500',
        color: colors.primary,
    }
})