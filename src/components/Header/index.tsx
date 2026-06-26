import { Button, Flex, Typography } from "antd";
import { headerTitle } from "./styles";

const { Title, Text } = Typography;

interface HeaderProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonIcon?: React.ReactNode;
  onClick?: () => void;
}

export default function Header({
  title,
  subtitle,
  buttonText,
  buttonIcon,
  onClick,
}: HeaderProps) {
  return (
    <Flex justify="space-between" align="center" gap={20}>
      <div>
        <Title level={1} style={headerTitle}>
          {title}
        </Title>
        <Text type="secondary">{subtitle}</Text>
      </div>
      {buttonText && (
        <Button
          type="primary"
          danger
          icon={buttonIcon}
          size="large"
          onClick={onClick}
        >
          {buttonText}
        </Button>
      )}
    </Flex>
  );
}
