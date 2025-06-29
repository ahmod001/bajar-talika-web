import { NextRequest, NextResponse } from 'next/server';
import { env } from './utils';

const SERVER_SECRET_API_KEY = env('API_KEY', '');

export function middleware(request: NextRequest) {

    const apiKey = request.headers.get('x-api-key');

    if (!SERVER_SECRET_API_KEY) {
        return NextResponse.json(
            { status: 'failed', code: 500, message: 'Server configuration error' },
            { status: 500 }
        );
    }

    if (apiKey === SERVER_SECRET_API_KEY) {

        return NextResponse.next();
    } else {
        return NextResponse.json(
            { status: 'failed', code: 401, message: 'Unauthorized: api_key is not valid or missing', },
            { status: 401 }
        );
    }
}

export const config = {
    matcher: '/api/:path*',
};

