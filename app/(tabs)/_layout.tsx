import { tabs } from '@/constents/data';
import '@/global.css';
import { clsx } from 'clsx';
import { Image } from 'react-native';
import { Tabs } from "expo-router";
import React from "react";
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {colors, components, spacing} from '@/constents/theme';

const TabIcon = ({ focused, icon }: TabIconProps) => {
        return (
            <View className='tabs-icon'>
                <View className={clsx('tabs-pill', focused && "tabs-active")}>
                    <Image source={icon} resizeMode='contain' className='tabs-glyph' />
                </View>
            </View>
        )
    }

const TabLayout = () => {
    const insets = useSafeAreaInsets()
    return (
        <Tabs 
            screenOptions={
                { 
                    headerShown: false, 
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        position:'absolute',
                        bottom: Math.max(insets.bottom, components.tabBar.horizontalInset),
                        height: components.tabBar.height,
                        marginHorizontal:components.tabBar.horizontalInset,
                        borderRadius: components.tabBar.radius,
                        backgroundColor: colors.primary,
                        borderTopWidth:0,
                        elevation:0,
                    },
                    tabBarItemStyle:{
                        paddingVertical: components.tabBar.itemPaddingVertical / 2 - components.tabBar.iconFrame / 1.6,
                    },
                    tabBarIconStyle:{
                        width: components.tabBar.iconFrame,
                        height: components.tabBar.iconFrame,
                        alignItems: 'center',
                    }
                    }
                }>
            {tabs.map((tabs) => (
                <Tabs.Screen 
                    key={tabs.name} 
                    name={tabs.name} 
                    options={{
                        title: tabs.title, 
                        tabBarIcon: ({ focused }) => (
                            <TabIcon  focused={focused} icon={tabs.icon}/>
                        )
                    }}
                />
            ))}
        </Tabs>
    );
};
export default TabLayout;