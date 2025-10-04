import { useCallback, useEffect, useRef, useState } from 'react';
import { copyToClipboard } from '@/helpers/copyToClipboard';

type Options = {
  timeout?: number;
  onSuccess?: (text: string) => void;
  onError?: (e: unknown) => void;
};

export const useCopyToClipboard = (options?: Options) => {
  const [isCopied, setIsCopied] = useState(false);
  const [error, setError] = useState<unknown>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { timeout = 2000, onSuccess, onError } = options ?? {};

  const getCopy = useCallback(async (text: string) => {
    setError(null);

    let ok = false;

    try {
      ok = await copyToClipboard(text);
    } catch (e) {
      setError(e);
      onError?.(e);
      return false;
    }

    if (!ok) {
      const err = new Error('Copy failed');
      setError(err);
      onError?.(err);
      return false;
    }

    setIsCopied(true);
    onSuccess?.(text);

    if (timeout > 0) {
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setIsCopied(false), timeout);
    }

    return true;
  }, [onSuccess, onError, timeout]);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return { getCopy, isCopied, error };
};
