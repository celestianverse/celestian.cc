import type { Props } from "./PlaygroundCode.types";
import { Box } from "@/components/uikit/Box/Box";
import { Button } from "@/components/uikit/Button/Button";
import { Tag } from "@/components/uikit/Tag/Tag";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";

export const PlaygroundCode = ({code}: Props) => {
  const {getCopy, isCopied} = useCopyToClipboard();

  return (
    <Box
      color="primary"
      tone="soft"
      direction="row"
      align="flex-start"
      justify="space-between"
      padding={16}
      fullwidth
      mobileDirection="column-reverse"
      mobileAlign="flex-end"
      mobileGap={0}
    >
      <Box
        padding={16}
        fullwidth
      >
        <pre>
          <code>
            {code}
          </code>
        </pre>
      </Box>
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
    </Box>
  );
};