import { MongoDBAdapter } from '@auth/mongodb-adapter';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import clientPromise from '@/lib/mongoClient';

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID ?? '',
    //   clientSecret: process.env.GITHUB_SECRET ?? '',
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
    // ...add more providers here
  ],
  client: MongoDBAdapter(clientPromise),
  screet: process.env.NEXT_AUTN_SCREET,
};

export default NextAuth(authOptions);
