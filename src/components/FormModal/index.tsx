import { Button, Flex, Modal } from "antd";

interface FormModalProps {
  title: string;
  open: boolean;
  onClose: () => void;
  onSave: () => void;
  children: React.ReactNode;
  iconButton: React.ReactNode;
}

export default function FormModal({
  title,
  open,
  onClose,
  onSave,
  children,
  iconButton,
}: FormModalProps) {
  return (
    <Modal
      title={title}
      open={open}
      onCancel={onClose}
      footer={
        <Flex justify="end" gap={12}>
          <Button type="default" size="large" onClick={onClose}>
            Cancelar
          </Button>
          <Button
            type="primary"
            danger
            icon={iconButton}
            size="large"
            onClick={onSave}
          >
            Salvar
          </Button>
        </Flex>
      }
      width={640}
      destroyOnHidden
    >
      {children}
    </Modal>
  );
}
