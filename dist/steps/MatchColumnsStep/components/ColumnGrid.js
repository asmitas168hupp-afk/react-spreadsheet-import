import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useStyleConfig, ModalBody, Heading, Flex, Box, Text } from '@chakra-ui/react';
import { ContinueButton } from '../../../components/ContinueButton.js';
import { useRsi } from '../../../hooks/useRsi.js';

const ColumnGrid = ({ columns, userColumn, templateColumn, onContinue, onBack, isLoading, }) => {
    const { translations } = useRsi();
    const styles = useStyleConfig("MatchColumnsStep");
    return (jsxs(Fragment, { children: [jsxs(ModalBody, { flexDir: "column", p: 8, overflow: "auto", children: [jsx(Heading, { sx: styles.heading, children: translations.matchColumnsStep.title }), jsxs(Flex, { flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr" // Two side-by-side columns
                        , gridTemplateRows: `auto repeat(${columns.length}, auto)`, gap: 4, children: [jsx(Box, { gridColumn: "1/2", children: jsx(Text, { sx: styles.title, children: translations.matchColumnsStep.userTableTitle }) }), jsx(Box, { gridColumn: "2/3", children: jsx(Text, { sx: styles.title, children: translations.matchColumnsStep.templateTitle }) }), columns.map((column, index) => [
                                jsx(Box, { gridColumn: "1/2", gridRow: index + 2, pt: 3, children: userColumn(column) }, `user-${column.header}-${index}`),
                                jsx(Box, { gridColumn: "2/3", gridRow: index + 2, pt: 3, children: templateColumn(column) }, `template-${column.header}-${index}`),
                            ])] })] }), jsx(ContinueButton, { isLoading: isLoading, onContinue: onContinue, onBack: onBack, title: translations.matchColumnsStep.nextButtonTitle, backTitle: translations.matchColumnsStep.backButtonTitle })] }));
};

export { ColumnGrid };
