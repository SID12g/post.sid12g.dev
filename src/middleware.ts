import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-pathname', request.url);
  const tagQueryParam = new URL(request.url).searchParams.get('tag');
  
  // 'tag' 헤더에 값을 설정
  if (tagQueryParam) {
    requestHeaders.set('tag', tagQueryParam);
  }
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    }
  });
}