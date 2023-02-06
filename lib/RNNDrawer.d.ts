/**
 * @author Luke Brandon Farrell
 * @description An animated drawer component for react-native-navigation.
 */
import * as React from 'react';
import { ViewStyle, StyleProp } from 'react-native';
import { Layout } from 'react-native-navigation';
declare interface RNNDrawerOptions {
    /**
     * Id of parent component of the drawer.
     * This field is necessary in order to be able
     * to push screens inside the drawer
     */
    parentComponentId: string;
    /**
     * Direction to open the collage,
     * one of: ["left", "right", "top", "bottom"]
     * If not provided, drawer  might have
     * a weird effect when closing
     */
    direction?: DirectionType;
    /**
     * Time in milliseconds to execute the drawer opening animation
     */
    animationOpenTime?: number;
    /**
     * Time in milliseconds to execute the drawer closing animation
     */
    animationCloseTime?: number;
    /**
     * Whether the drawer be dismissed when a click is registered outside
     */
    dismissWhenTouchOutside?: boolean;
    /**
     * Opacity of the screen outside the drawer
     */
    fadeOpacity?: number;
    /**
     * Width of drawer on portrait orientation. Pass a string containing '%' (e.g. "80%")
     * for setting the width in relation to the screen or a number for absolute width (e.g. 300)
     */
    drawerScreenWidth?: number | string;
    /**
     * Width of drawer on landscape orientation. Pass a string containing '%' (e.g. "80%")
     * for setting the width in relation to the screen or a number for absolute width (e.g. 300)
     */
    drawerScreenWidthOnLandscape?: number | string;
    /**
     * Height of drawer. Pass a string containing '%' (e.g. "30%")
     * for setting the height in relation to the screen or a number for absolute height (e.g. 300)
     */
    drawerScreenHeight?: number | string;
    disableDragging?: boolean;
    disableSwiping?: boolean;
}
export declare enum DirectionType {
    left = "left",
    right = "right",
    bottom = "bottom",
    top = "top"
}
interface IProps {
    /** react-native-navigation */
    componentId: string;
    /** Props */
    animationOpenTime: number;
    animationCloseTime: number;
    direction: DirectionType;
    dismissWhenTouchOutside: boolean;
    fadeOpacity: number;
    drawerScreenWidth: number | string;
    drawerScreenWidthOnLandscape: number | string;
    drawerScreenHeight: number | string;
    animateDrawerExpanding?: boolean;
    disableDragging?: boolean;
    disableSwiping?: boolean;
    style?: StyleProp<ViewStyle>;
    overlayStyle?: StyleProp<ViewStyle>;
}
declare class RNNDrawer {
    /**
     * Generates the drawer component to
     * be used with react-native-navigation
     *
     * @param Component
     */
    static create<P extends IProps>(Component: React.ComponentType<P>): any;
    /**
     * Shows a drawer component
     *
     * @param layout
     */
    static showDrawer<P extends IProps>(layout: Layout<RNNDrawerOptions & P>): void;
    /**
     * Dismiss the drawer component
     */
    static dismissDrawer(): void;
}
export default RNNDrawer;
