import React from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import { icons } from '../../assets'
import { colors, fontSizes, strings } from '../../constants'
import { ms, vs } from '../../utils'
import { GradientButton } from '../common'
import { policyListData } from '../../data'

export default function PolicyFlatlist() {
    return (
        <FlatList
            style={{
                flex: 1,
                backgroundColor: colors.white,
                // marginBottom: vs(70)
                // paddingBottom: vs(70)
            }}
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
            style={{
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
            }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: ms(5),
                paddingBottom: ms(10),
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <Image
                        style={{
                            width: 30,
                            height: 30
                        }}
                        source={img}
                    />
                    <Text style={{
                        paddingHorizontal: ms(20),
                        ...fontSizes.h5,
                        fontWeight: '600',
                        color: colors.primary,
                    }}>
                        {title}
                    </Text>
                </View>
                {
                    isNew && (
                        <Image
                            style={{
                                justifyContent: 'flex-end',
                                width: 54,
                                height: 20,
                                marginRight: -12,
                                // marginTop: -29,
                            }}
                            source={icons.new}
                        />)
                }
            </View>

            {/* ////////////////middle section////// */}

            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-around',
                paddingVertical: vs(10),
                borderTopWidth: 1,
                borderBottomWidth: 1,
                borderColor: colors.border,
            }}>
                <KeyValueItem text={strings.coverage} value={coverage} />
                <KeyValueItem text={strings.term} value={term} />
                <KeyValueItem text={strings.members} value={members} />
                <KeyValueItem text={strings.premium} value={Premium} />
            </View>


            {/* /////buttons//// */}
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingVertical: ms(14),
                    alignItems: 'center'
                }}
            >
                <View style={{
                    borderBottomWidth: 1,
                    borderBottomColor: colors.primary
                }}>
                    <Text
                        style={{
                            borderBottomWidth: 1,
                            borderBottomColor: colors.primary,
                            ...fontSizes.h6,
                            fontWeight: '500',
                            color: colors.primary,
                        }}
                    >{strings.add_to_compare}</Text>
                </View>
                <GradientButton isGradient={false} title={'View Details'} />
                <GradientButton title={'Purchase'} />
            </View>
        </View>

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
