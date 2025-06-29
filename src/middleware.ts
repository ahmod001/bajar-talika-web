import { NextRequest, NextResponse } from 'next/server';
import { env } from './utils';

const SERVER_SECRET_API_KEY = env('API_KEY', '');
const APP_BASE_URL = env('NEXT_PUBLIC_APP_BASE_URL', 'http://localhost:3000');


export function middleware(request: NextRequest) {

    const apiKey = request.headers.get('x-api-key');
    const referer = request.headers.get('referer');


    // Check & skip the internal request
    if (APP_BASE_URL && referer && referer.startsWith(APP_BASE_URL))
        return NextResponse.next();



    // Check if the API_KEY exists
    if (!SERVER_SECRET_API_KEY) {
        return NextResponse.json(
            { status: 'failed', code: 500, message: 'Server configuration error' },
            { status: 500 }
        );
    }


    // Check if the API_KEY is matched
    if (apiKey === SERVER_SECRET_API_KEY) {

        return NextResponse.next();
    }
    return NextResponse.json(
        { status: 'failed', code: 401, message: 'Unauthorized: api_key is not valid or missing', },
        { status: 401 }
    );

}

export const config = {
    matcher: '/api/:path*',
};

