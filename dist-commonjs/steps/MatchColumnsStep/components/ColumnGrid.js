'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var react = require('@chakra-ui/react');
var ContinueButton = require('../../../components/ContinueButton.js');
var useRsi = require('../../../hooks/useRsi.js');

const ColumnGrid = ({ columns, userColumn, templateColumn, onContinue, onBack, isLoading, }) => {
    const { translations } = useRsi.useRsi();
    const styles = react.useStyleConfig("MatchColumnsStep");
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsxs(react.ModalBody, { flexDir: "column", p: 8, overflow: "auto", children: [jsxRuntime.jsx(react.Heading, { sx: styles.heading, children: translations.matchColumnsStep.title }), jsxRuntime.jsxs(react.Flex, { flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr" // Two side-by-side columns
                        , gridTemplateRows: `auto repeat(${columns.length}, auto)`, gap: 4, children: [jsxRuntime.jsx(react.Box, { gridColumn: "1/2", children: jsxRuntime.jsx(react.Text, { sx: styles.title, children: translations.matchColumnsStep.userTableTitle }) }), jsxRuntime.jsx(react.Box, { gridColumn: "2/3", children: jsxRuntime.jsx(react.Text, { sx: styles.title, children: translations.matchColumnsStep.templateTitle }) }), columns.map((column, index) => [
                                jsxRuntime.jsx(react.Box, { gridColumn: "1/2", gridRow: index + 2, pt: 3, children: userColumn(column) }, `user-${column.header}-${index}`),
                                jsxRuntime.jsx(react.Box, { gridColumn: "2/3", gridRow: index + 2, pt: 3, children: templateColumn(column) }, `template-${column.header}-${index}`),
                            ])] })] }), jsxRuntime.jsx(ContinueButton.ContinueButton, { isLoading: isLoading, onContinue: onContinue, onBack: onBack, title: translations.matchColumnsStep.nextButtonTitle, backTitle: translations.matchColumnsStep.backButtonTitle })] }));
};

exports.ColumnGrid = ColumnGrid;
