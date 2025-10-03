import { useCallback, useState } from 'react';
import { copyToClipboard } from "@/helpers/copyToClipboard";

type Options = { timeout?: number; onSuccess?: (text: string) => void; onError?: (e: unknown) => void };

export const useCopyToClipboard = (options?: Options) => {
  const [isCopied, setIsCopied] = useState(false);
  const [error, setError] = useState<unknown>(null);

  const getCopy = useCallback(async (text: string) => {
    try {
      const ok = await copyToClipboard(text);

      if (!ok) throw new Error('Copy failed');

      setIsCopied(true);

      options?.onSuccess?.(text);

      const t = options?.timeout ?? 2000;

      if (t > 0) setTimeout(() => setIsCopied(false), t);

      return true;
    } catch (e) {
      setError(e);

      options?.onError?.(e);

      return false;
    }
  }, [options]);

  return { getCopy, isCopied, error };
};
