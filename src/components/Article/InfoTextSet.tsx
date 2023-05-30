import { Flex, Text } from '../common/common';

interface InfoTextSetProps {
    title: string;
    description: string[];
    color?: string;
    align?: alignType;
    className?: string;
}

type alignType = 'flex-start' | 'flex-end';

export const InfoTextSet = ({
    title,
    description,
    color = '#000',
    align = 'flex-start',
    className = '',
}: InfoTextSetProps) => {
    return (
        <Flex className={className} direction="column" gap={1.04} align={align} justify="flex-start">
            <Text typo="ClothTitle" color={color}>
                {title}
            </Text>
            <Flex direction="column" align={align} justify="flex-start">
                {description.map((el, index) =>
                    el === ' ' ? (
                        <br key={index} />
                    ) : (
                        <Text key={index} typo="BulgogiAnswer" color={color}>
                            {el}
                        </Text>
                    )
                )}
            </Flex>
        </Flex>
    );
};
