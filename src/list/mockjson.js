const listObj = {
    status: 'status',
    code: 0,
    data: [
        {
            pageIndex: 1,
            quesIndex: 1,
            activityDuration: 10,
            activityType: 'HighChoice',
            answerInfo: {
                answerDuration: 8,
                count: '2',
                quesTitle: 'How is everything going with you?',
                answerList: [
                    'dog',
                    'pig',
                    'cat',
                    'monkey'
                ]
            },
        },
        {
            pageIndex: 1,
            quesIndex: 2,
            activityDuration: 10,
            activityType: 'HighSpeech',
            answerInfo: {
                answerDuration: 8,
                count: '2',
                quesTitle: 'How is everything going with you?',
                answerList: [
                    'dog',
                ]
            },
        },
        {
            pageIndex: 1,
            quesIndex: 3,
            activityDuration: 10,
            activityType: 'speechVote',
            answerInfo: {
                answerDuration: 8,
                count: '2',
                quesTitle: 'How is everything going with you?',
                answerList: [
                    'dog',
                    'cat',
                    'pig',
                    'monkey',
                    'elephant',
                    'kangaroo',
                    'tiger',
                    'lion',
                ]
            },
        },
        {
            pageIndex: 1,
            quesIndex: 4,
            activityDuration: 10,
            activityType: 'redEnvelope',
            answerInfo: {
                answerDuration: 8,
                count: '2',
                quesTitle: '',
                answerList: []
            },
        },
        {
            pageIndex: 2,
            quesIndex: 1,
            activityDuration: 100,
            activityType: 'flashCard',
            answerInfo: [
                {
                    answerDuration: 98,
                    count: '',
                    quesTitle: 'apple',
                    answerList: [
                        'http://a.hiphotos.baidu.com/image/pic/item/f603918fa0ec08fa3139e00153ee3d6d55fbda5f.jpg'
                    ]
                },
                {
                    answerDuration: 8,
                    count: '',
                    quesTitle: 'orange',
                    answerList: [
                        'http://a.hiphotos.baidu.com/image/pic/item/f603918fa0ec08fa3139e00153ee3d6d55fbda5f.jpg'
                    ]
                },
                {
                    answerDuration: 8,
                    count: '',
                    quesTitle: 'banana',
                    answerList: [
                        'http://a.hiphotos.baidu.com/image/pic/item/f603918fa0ec08fa3139e00153ee3d6d55fbda5f.jpg'
                    ]
                },
            ],
        },
        {
            pageIndex: 2,
            quesIndex: 1,
            activityDuration: 100,
            activityType: 'oneVsOne',
            commonVideo: {
                tryAgain: 'http://a.hiphotos.baidu.com/image/pic/item/f603918fa0ec08fa3139e00153ee3d6d55fbda5f.jpg',
                perfectList: [
                    'http://a.hiphotos.baidu.com/image/pic/item/f603918fa0ec08fa3139e00153ee3d6d55fbda5f.jpg',
                    'http://a.hiphotos.baidu.com/image/pic/item/f603918fa0ec08fa3139e00153ee3d6d55fbda5f.jpg',
                    'http://a.hiphotos.baidu.com/image/pic/item/f603918fa0ec08fa3139e00153ee3d6d55fbda5f.jpg',
                    'http://a.hiphotos.baidu.com/image/pic/item/f603918fa0ec08fa3139e00153ee3d6d55fbda5f.jpg',
                ]
            },
            answerInfo: [
                {
                    answerDuration: 98,
                    count: '',
                    quesTitle: 'apple',
                    answerData: {
                        answerImg: 'http://a.hiphotos.baidu.com/image/pic/item/f603918fa0ec08fa3139e00153ee3d6d55fbda5f.jpg',
                        follow: 'http://a.hiphotos.baidu.com/image/pic/item/f603918fa0ec08fa3139e00153ee3d6d55fbda5f.jpg',
                        good: 'http://a.hiphotos.baidu.com/image/pic/item/f603918fa0ec08fa3139e00153ee3d6d55fbda5f.jpg',
                        normal: 'http://a.hiphotos.baidu.com/image/pic/item/f603918fa0ec08fa3139e00153ee3d6d55fbda5f.jpg'
                    }
                },
                {
                    answerDuration: 8,
                    count: '',
                    quesTitle: 'orange',
                    answerData: {
                        answerImg: 'http://a.hiphotos.baidu.com/image/pic/item/f603918fa0ec08fa3139e00153ee3d6d55fbda5f.jpg',
                        follow: 'http://a.hiphotos.baidu.com/image/pic/item/f603918fa0ec08fa3139e00153ee3d6d55fbda5f.jpg',
                        good: 'http://a.hiphotos.baidu.com/image/pic/item/f603918fa0ec08fa3139e00153ee3d6d55fbda5f.jpg',
                        normal: 'http://a.hiphotos.baidu.com/image/pic/item/f603918fa0ec08fa3139e00153ee3d6d55fbda5f.jpg'
                    }
                },
                {
                    answerDuration: 8,
                    count: '',
                    quesTitle: 'banana',
                    answerData: {
                        answerImg: 'http://a.hiphotos.baidu.com/image/pic/item/f603918fa0ec08fa3139e00153ee3d6d55fbda5f.jpg',
                        follow: 'http://a.hiphotos.baidu.com/image/pic/item/f603918fa0ec08fa3139e00153ee3d6d55fbda5f.jpg',
                        good: 'http://a.hiphotos.baidu.com/image/pic/item/f603918fa0ec08fa3139e00153ee3d6d55fbda5f.jpg',
                        normal: 'http://a.hiphotos.baidu.com/image/pic/item/f603918fa0ec08fa3139e00153ee3d6d55fbda5f.jpg'
                    }
                },
            ],
        },
    ]
};

export default listObj
