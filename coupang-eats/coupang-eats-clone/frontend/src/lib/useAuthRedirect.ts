import { useEffect } from 'react';

import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

export const useAuthRedirect = () => {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    // 현재 페이지가 회원가입 페이지인 경우 페이지 이동 안함
    if (router.pathname == '/auth/signin') return;

    if (status === 'unauthenticated') {
      router.replace('/auth/signin');
    }
  }, [router, status]);
};
