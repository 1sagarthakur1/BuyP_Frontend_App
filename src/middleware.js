import { NextResponse } from "next/server";
import BASE_URL from "./appConfig";

export async function middleware(request) {
    let token = 'worngtokent';
    const tokenkey = request.cookies.get('token');

    if (tokenkey !== undefined) {
        token = tokenkey.value;
    }

    const fetchCurrentData = async () => {
        try {
            // const token = JSON.parse(localStorage.getItem("data"));
            const response = await fetch(`${BASE_URL}/api/user/currentUser`, {
                method: "Get",
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
            });
            const newData = await response.json();
            // console.log(newData)
            if (newData.user) {
                request.currentUser = "logdin"
            } else {
                request.currentUser = "userNotLogdin"
            }

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    await fetchCurrentData();

    if (request.nextUrl.pathname.startsWith('/Pages/user_account') && request.currentUser === "userNotLogdin") {
        return NextResponse.redirect(new URL("/Pages/signup_login", request.url))
    }

    if(request.nextUrl.pathname.startsWith("/Pages/order") && request.currentUser === 'userNotLogdin'){
        return NextResponse.redirect(new URL("/Pages/signup_login",request.url))
    }

    if(request.nextUrl.pathname.startsWith("/Pages/signup_login") && request.currentUser === 'logdin'){
        return NextResponse.redirect(new URL("/",request.url))
    }

    if(request.nextUrl.pathname.startsWith("/Pages/cart") && request.currentUser === 'userNotLogdin'){
        return NextResponse.redirect(new URL("/Pages/signup_login",request.url))
    }

    if(request.nextUrl.pathname.startsWith("/Pages/do_order") && request.currentUser === 'userNotLogdin'){
        return NextResponse.redirect(new URL("/",request.url))
    }

}

export const config = {
    matcher: ['/Pages/do_order/:path*','/Pages/cart/:path*','/Pages/signup_login/:path*','/Pages/orders/:path*', '/Pages/user_account/:path*']
}
