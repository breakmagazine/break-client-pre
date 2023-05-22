import { Flex, Text } from '../common/common';

interface TextSetProps {
    title: string;
    description: string[];
}

/**
 * @param title: string;
 * @param description: string[];
 */

export const TextSet = ({ title, description }: TextSetProps) => {
    return (
        <Flex direction="column" gap={1.38} align="flex-start" justify="flex-start">
            <Text typo="Title1">{title}</Text>
            <Flex direction="column" gap={2.08} align="flex-start" justify="flex-start">
                {description.map((el, index) => (
                    <Text key={index} typo="Body1">
                        {el}
                    </Text>
                ))}
            </Flex>
        </Flex>
    );
};
