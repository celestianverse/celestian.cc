import type { Props } from "./PlaygroundCode.types";
import { Box } from "@/components/uikit/Box/Box";
import { Button } from "@/components/uikit/Button/Button";
import { Tag } from "@/components/uikit/Tag/Tag";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { Title } from "@/components/uikit/Title/Title";
import { uikit } from "@/data/uikit";
import { Row } from "@/components/uikit/Row/Row";

export const PlaygroundCode = ({code}: Props) => {
  const {getCopy, isCopied} = useCopyToClipboard();

  return (
    <Box
      color="primary"
      tone="soft"
      fullwidth
    >
      <Row
        align="center"
        justify="space-between"
        fullwidth
      >
        <Title size="s">
          {uikit.playground.code.title}
        </Title>
        {!isCopied && (
          <Button
            variant="ghost"
            size="s"
            iconStart="copy"
            onClick={() => getCopy(code)}
          >
            Copy
          </Button>
        )}
        {isCopied && (
          <Tag
            variant="flat"
            tone="soft"
            color="success"
            size="s"
            iconStart="check"
          >
            Copied
          </Tag>
        )}
      </Row>
      <pre>
          <code>
            {code}
          </code>
        </pre>
    </Box>
  );
};