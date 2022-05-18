import React from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import { icons } from '../../assets'
import { colors, fontSizes } from '../../constants'
import { ms } from '../../utils'
import { GradientButton } from '../common'

const data = [
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

export default function PolicyFlatlist() {
    return (
        <FlatList
            style={{
                backgroundColor: colors.white
            }}
            data={data}
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
        <View style={{
            borderWidth: 1,
            backgroundColor: colors.white,
            borderColor: colors.border,
            padding: ms(10),
            borderRadius: ms(8),
            marginVertical: ms(10)
        }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingVertical: ms(5)
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
                                width: 34,
                                height: 34,
                                marginRight: -12,
                                marginTop: -29,
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
            }}>
                <KeyValueItem text="Coverage" value={coverage} />
                <KeyValueItem text="Term" value={term} />
                <KeyValueItem text="Members" value={members} />
                <KeyValueItem text="Premium" value={Premium} />
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
                            color: colors.primary,
                        }}
                    >Add to compare</Text>
                </View>
                <GradientButton isGradient={false} title={'View Details'} />
                <GradientButton title={'Purchase'} />
                {/* <GradientButton title={'View Details'} /> */}

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
                    fontWeight: '500'
                }}>{text}</Text>
                <Text
                    style={{
                        ...fontSizes.h7,
                    }}
                >{value}</Text>
            </View>
        </View>
    )
}
