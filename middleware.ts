import { NextRequest } from "next/server";

// 14.1.0 - HOST localhost:3000
// { HOST: 'localhost:3000', PATH: '/' }
// { HOST: 'localhost:3000', PATH: '/blog' }
// { HOST: 'localhost:3000', PATH: '/blog' }

// 14.1.1
// { HOST: 'localhost:3000', PATH: '/' }
// { HOST: '[::]:3000', PATH: '/blog' }
// { HOST: '[::]:3000', PATH: '/blog' }

export function middleware(req: NextRequest) {
  console.log({ HOST: req.headers.get("host"), PATH: req.nextUrl.pathname });
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
