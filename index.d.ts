import type * as React from "react";
import { StyleProp, ViewStyle, TextStyle } from "react-native";

declare module "react-native-select-dropdown" {
  export type SelectDropdownProps = {
    /**
      * array of data that will be represented in dropdown, can be array of objects
      */
    data: Array<any>;
    /**
     * function recieves selected item and its index in data array
      */
    onSelect: (selectedItem: any, index: number) => void;
    /**
     * function created to be used with react-hook-forms
     */
    onSelectChange?: (selectedItem: any, index: number) => void;
    /**
     * default button text when no item is selected
     */
    defaultButtonText?: string;
    /**
     * function recieves selected item and its index, this function should return a string that will be represented in button after item is selected
     */
    buttonTextAfterSelection: (selectedItem: any, index: number) => string;
    /**
     * function recieves item and index for each row in dropdown, this function shoud return a string that will be represented in each row in dropdown
     */
    rowTextForSelection: (item: any, index: number) => string;
    /**
     * default selected item in dropdown
     */
    defaultValue?: any;
    /**
     * default selected item index
     */
    defaultValueByIndex?: number;
    /**
     * disable dropdown
     */
    disabled?: boolean;
    /**
     * disable auto scroll to selected value
     */
    disableAutoScroll?: boolean;
    /**
      * function fires when dropdown is opened
      */
    onFocus?: () => void;
    /**
      * function fires when dropdown is closed
      */
    onBlur?: () => void;
    /**
     * style object for button
     */
    buttonStyle?: StyleProp<ViewStyle>;
    /**
     * style object for button text
     */
    buttonTextStyle?: StyleProp<TextStyle>;
    /**
     * function recieves selected item and its index, this function should return a React component as a child for dropdown button buttonStyle should be used for parent button view style.
     */
    renderCustomizedButtonChild?: (selectedItem: any, index: number) => React.ReactNode;
    /**
     * function that should return a React component for dropdown icon
     */
    renderDropdownIcon?: (selectedItem: any, index: number) => React.ReactNode;
    /**
     * dropdown icon position "left" || "right"
     */
    dropdownIconPosition?: "left" | "right";
    /**
     * required to set true when statusbar is translucent (android only)
     */
    statusBarTranslucent?: boolean;
    /**
     * style object for dropdown view
     */
    dropdownStyle?: StyleProp<ViewStyle>;
    /**
     * backdrop color when dropdown is opened 
     */
    dropdownOverlayColor?: string;
    /**
     * style object for row
     */
    rowStyle?: StyleProp<ViewStyle>;
    /**
     * style object for row text
     */
    rowTextStyle?: StyleProp<TextStyle>;
    /**
     * style object for selected row
     */
    selectedRowStyle?: StyleProp<ViewStyle>;
    /**
     * style object for selected row text
     */
    selectedRowTextStyle?: StyleProp<TextStyle>;
    /**
     * function recieves item and its index, this function should return React component as a child for customized row rowStyle should be used for parent row view style.
     */
    renderCustomizedRowChild?: (selectedItem: any, index: number) => React.ReactNode;
    /**
     * enable search functionality
     */
    search?: boolean;
    /**
     * style object for search input
     */
    searchInputStyle?: StyleProp<ViewStyle>;
    /**
     * text color for search input
     */
    searchInputTxtColor?: string;
    /**
    * placeholder text for search input
    */
    searchPlaceHolder?: string;
    /**
    * text color for search input placeholder
    */
    searchPlaceHolderColor?: string;
    /**
     * function returns React component for search input icon
     */
    renderSearchInputLeftIcon?: (selectedItem: any, index: number) => React.ReactNode;
    /**
    * function returns React component for search input icon
    */
    renderSearchInputRightIcon?: (selectedItem: any, index: number) => React.ReactNode;
  };

  export default class SelectDropdown extends React.Component<SelectDropdownProps> {
    /**
     * Remove selection & reset it to display defaultButtonText check
     */
    reset(): void;
    /**
     * Open the dropdown.
     */
    openDropdown(): void;
    /**
     * Close the dropdown.
     */
    closeDropdown(): void;
  }
}
