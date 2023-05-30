import { Flex, Text } from '../common/common';

interface InterviewProps {
    title: string;
    description: string[];
    titleColor?: string;
    descriptionColor?: string;
    className?: string;
}

export const Interview = ({
    title,
    description,
    titleColor = '#000',
    descriptionColor = '#4B4B4B',
    className = '',
}: InterviewProps) => {
    return (
        <Flex className={className} direction="column" gap={2.152} align="flex-start" justify="flex-start">
            <Text typo="BulgogiQuestion" color={titleColor}>
                {title}
            </Text>

            <Flex direction="column" align="flex-start" justify="flex-start">
                {description.map((el, index) =>
                    el === ' ' ? (
                        <br key={index} />
                    ) : (
                        <Text key={index} typo="BulgogiAnswer" color={descriptionColor}>
                            {el}
                        </Text>
                    )
                )}
            </Flex>
        </Flex>
    );
};
