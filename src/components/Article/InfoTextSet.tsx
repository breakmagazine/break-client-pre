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
                        <Flex key={index} direction="row">
                            <Text key={index} typo="ClothInfoBold" color={color}>
                                {el.split('*')[0] + ' '}
                            </Text>
                            <Text key={index} typo="ClothInfo" color={color}>
                                {el.split('*')[1]}
                            </Text>
                        </Flex>
                    )
                )}
            </Flex>
        </Flex>
    );
};
