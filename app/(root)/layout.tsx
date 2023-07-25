import { redirect } from 'next/navigation';

import getCurrentUser from '../actions/getCurrentUser';
import prismadb from '@/lib/prismadb';

export default async function SetupLayout({
  children,
}: {
  children: React.ReactNode
}) {
    const user = await getCurrentUser();
    const userId = user?.id

  if (!userId) {
    redirect('/auth');
  }

  const store = await prismadb.store.findFirst({
    where: {
      userId,
    }
  });

  if (store) {
    redirect(`/${store.id}`);
  };

  return (
    <>
      {children}
    </>
  );
};