/** @type {import('./$types').LayoutLoad} */
export function load({url}) {
    let slug = url.pathname.split('/');

    return {
        sections: [
            {slug: 'profile', title: '소개 프로필', which: slug[3]},
            {slug: 'account', title: '회원 정보', which: slug[3]},
            {slug: 'activity', title: '활동 내역', which: slug[3]},
            {slug: 'friend', title: '친구', which: slug[3]},
            {slug: 'service', title: '고객센터', which: slug[3]},
        ]
    }
}