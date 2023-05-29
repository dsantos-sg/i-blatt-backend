# REST API DOCUMENTATION

Published at:
https://i-blatt-be.onrender.com/api/

## Add a new user

```
POST https://i-blatt-be.onrender.com/api/signup

Request body
{
    "userName": "dan18",
    "email": "daniel@mail.com",
    "password": "test12345",
    "nativeLanguage": "Portuguese"
}
```

## Login

```
POST https://i-blatt-be.onrender.com/api/login

Request body
{
    "email": "daniel@mail.com",
    "password": "test12345",
}

Response: 
"data": {
        "token": "eyJhbGciOiJIUzI1NiIs...",
        "userId": "64247c2eff167550e59ad0ba"
    }
}

```

## Bearer token

```
Get a valid bearer token from login.

Using Postman:
- On the Authorization Tab, select the Bearer Token option;
- paste the token without quotes that you received when logging in;
```

## Get user by id:

```
GET https://i-blatt-be.onrender.com/api/api/user/64247c2eff167550e59ad0ba

Response body
{
    "_id" : ObjectId("64249076f0194fc785d53c69"),
    "userName" : "dan18",
    "email" : "daniel@mail.com",
    "password" : "$2b$12$V5RHT0U/zujRjdtjMHpFO.MzrwzwDWAkkbvxfGSKHrT/McK3h7WB2",
    "nativeLanguage" : "Portuguese",
    "words" : [

    ],
    "createdAt" : ISODate("2023-03-29T19:24:38.324+0000"),
    "updatedAt" : ISODate("2023-03-29T19:24:38.324+0000"),
    "__v" : NumberInt(0)
}
```

## Create a new word: Noun

```
Need bearer token

POST https://i-blatt-be.onrender.com/api/create-word

Request body
{
    "nativeWord": "Casa",
    "image": "https://picsum.photos/seed/picsum/200/300",
    "wordType":  "NOUN",
    "rating": 4,
    "timestampAccess":["2023-03-29T17:58:06.135+0000", "2001-01-23"],
    "foreignWordData": {
        "nounType":[
            {
                "language": "English",
                "foreignWord":"House",
                "mainArticle": "The",
                "plural": "Houses",
                "synonyms": ["home", "lorem", "ipsum" ],
                "sentences":["The house is old.", "The house is green."],
                "tags":["Lorem", "Ipsum", "Family"],
                "additionalInfos":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt felis sed dui dignissim aliquam. Suspendisse finibus leo purus, nec sodales lacus rutrum ac. Vivamus id vehicula enim, a pharetra ligula. Ut ullamcorper molestie mauris, et bibendum velit faucibus eget. Sed tincidunt tellus leo, vel sagittis tortor gravida euismod. Fusce eu purus mi. Cras consectetur vehicula velit non egestas. Morbi hendrerit sagittis orci, vel tincidunt nibh sollicitudin eu. Donec posuere nibh vel sem mollis, vel feugiat dui accumsan. Proin vitae magna in dolor ultrices auctor eget quis risus. Sed eros mauris, vulputate at justo vel, pretium volutpat massa. Ut mollis quis felis nec placerat."
            },
                        {
                "language": "German",
                "foreignWord":"Haus",
                "mainArticle": "Das",
                "plural": "Haus",
                "synonyms": ["home", "lorem", "ipsum" ],
                "sentences":["The house is old.", "The house is green."],
                "tags":["Lorem", "Ipsum", "Family"],
                "additionalInfos":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt felis sed dui dignissim aliquam. Suspendisse finibus leo purus, nec sodales lacus rutrum ac. Vivamus id vehicula enim, a pharetra ligula. Ut ullamcorper molestie mauris, et bibendum velit faucibus eget. Sed tincidunt tellus leo, vel sagittis tortor gravida euismod. Fusce eu purus mi. Cras consectetur vehicula velit non egestas. Morbi hendrerit sagittis orci, vel tincidunt nibh sollicitudin eu. Donec posuere nibh vel sem mollis, vel feugiat dui accumsan. Proin vitae magna in dolor ultrices auctor eget quis risus. Sed eros mauris, vulputate at justo vel, pretium volutpat massa. Ut mollis quis felis nec placerat."
            }
        ]
    }
}

```

## Create a new word: Verb

```
Need bearer token

POST https://i-blatt-be.onrender.com/api/create-word

Request body
{
    "nativeWord": "Correr",
    "image": "https://picsum.photos/seed/picsum/200/300",
    "wordType":  "VERB",
    "rating": 4,
    "timestampAccess":["2023-03-29T17:58:06.135+0000", "2001-01-23"],
    "foreignWordData": {
        "verbType":[
            {
                "language": "English",
                "foreignWord":"Run",
                "verbTense": {
                    "presentTense": {
                        "firstSingularPerson": "Lorem",
                        "secondSingularPerson": "Lorem",
                        "thirdSingularPerson": "Lorem",
                        "firstPluralPerson": "Lorem",
                        "secondPluralPerson": "Lorem",
                        "thirdPluralPerson": "Lorem"
                    },
                    "simplePast": {
                        "firstSingularPerson": "Lorem",
                        "secondSingularPerson": "Lorem",
                        "thirdSingularPerson": "Lorem",
                        "firstPluralPerson": "Lorem",
                        "secondPluralPerson": "Lorem",
                        "thirdPluralPerson": "Lorem"
                    },
                    "pastPerfectTense": {
                        "firstSingularPerson": "Lorem",
                        "secondSingularPerson": "Lorem",
                        "thirdSingularPerson": "Lorem",
                        "firstPluralPerson": "Lorem",
                        "secondPluralPerson": "Lorem",
                        "thirdPluralPerson": "Lorem"
                    }
                },
                "synonyms": ["home", "lorem", "ipsum" ],
                "sentences":["The house is old.", "The house is green."],
                "tags":["Lorem", "Ipsum", "Family"],
                "additionalInfos":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt felis sed dui dignissim aliquam. Suspendisse finibus leo purus, nec sodales lacus rutrum ac. Vivamus id vehicula enim, a pharetra ligula. Ut ullamcorper molestie mauris, et bibendum velit faucibus eget. Sed tincidunt tellus leo, vel sagittis tortor gravida euismod. Fusce eu purus mi. Cras consectetur vehicula velit non egestas. Morbi hendrerit sagittis orci, vel tincidunt nibh sollicitudin eu. Donec posuere nibh vel sem mollis, vel feugiat dui accumsan. Proin vitae magna in dolor ultrices auctor eget quis risus. Sed eros mauris, vulputate at justo vel, pretium volutpat massa. Ut mollis quis felis nec placerat."
            }
        ]
    }
}

```

## Create a new word: Adjective

```
Need bearer token

POST https://i-blatt-be.onrender.com/api/create-word

Request body
{
    "nativeWord": "Bonita",
    "image": "https://picsum.photos/seed/picsum/200/300",
    "wordType":  "ADJECTIVE",
    "rating": 4,
    "timestampAccess":["2023-03-29T17:58:06.135+0000", "2001-01-23"],
    "foreignWordData": {
        "verbType":[
            {
                "language": "English",
                "foreignWord":"Beautiful",
                "inferiority": "less beautiful than",
                "comparative": "prettier than",
                "superlative": "awesome",
                "synonyms": ["home", "lorem", "ipsum" ],
                "sentences":["The house is old.", "The house is green."],
                "tags":["Lorem", "Ipsum", "Family"],
                "additionalInfos":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt felis sed dui dignissim aliquam. Suspendisse finibus leo purus, nec sodales lacus rutrum ac. Vivamus id vehicula enim, a pharetra ligula. Ut ullamcorper molestie mauris, et bibendum velit faucibus eget. Sed tincidunt tellus leo, vel sagittis tortor gravida euismod. Fusce eu purus mi. Cras consectetur vehicula velit non egestas. Morbi hendrerit sagittis orci, vel tincidunt nibh sollicitudin eu. Donec posuere nibh vel sem mollis, vel feugiat dui accumsan. Proin vitae magna in dolor ultrices auctor eget quis risus. Sed eros mauris, vulputate at justo vel, pretium volutpat massa. Ut mollis quis felis nec placerat."
            }
        ]
    }
}

```

## Create a new word: Pronoun

```
Need bearer token

POST https://i-blatt-be.onrender.com/api/create-word

Request body
{
    "nativeWord": "Eu",
    "image": "https://picsum.photos/seed/picsum/200/300",
    "wordType":  "PRONOUN",
    "rating": 4,
    "timestampAccess":["2023-03-29T17:58:06.135+0000", "2001-01-23"],
    "foreignWordData": {
        "verbType":[
            {
                "language": "English",
                "foreignWord":"I",
                "generalDefinitions": "Lorem ipsum dolor sit amet",
                "synonyms": ["home", "lorem", "ipsum" ],
                "sentences":["The house is old.", "The house is green."],
                "tags":["Lorem", "Ipsum", "Family"],
                "additionalInfos":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt felis sed dui dignissim aliquam. Suspendisse finibus leo purus, nec sodales lacus rutrum ac. Vivamus id vehicula enim, a pharetra ligula. Ut ullamcorper molestie mauris, et bibendum velit faucibus eget. Sed tincidunt tellus leo, vel sagittis tortor gravida euismod. Fusce eu purus mi. Cras consectetur vehicula velit non egestas. Morbi hendrerit sagittis orci, vel tincidunt nibh sollicitudin eu. Donec posuere nibh vel sem mollis, vel feugiat dui accumsan. Proin vitae magna in dolor ultrices auctor eget quis risus. Sed eros mauris, vulputate at justo vel, pretium volutpat massa. Ut mollis quis felis nec placerat."
            }
        ]
    }
}

```

## Create a new word: Connection

```
Need bearer token

POST https://i-blatt-be.onrender.com/api/create-word

Request body
{
    "nativeWord": "Mais",
    "image": "https://picsum.photos/seed/picsum/200/300",
    "wordType":  "CONNECTION",
    "rating": 4,
    "timestampAccess":["2023-03-29T17:58:06.135+0000", "2001-01-23"],
    "foreignWordData": {
        "verbType":[
            {
                "language": "English",
                "foreignWord":"Plus",
                "generalDefinitions": "Lorem ipsum dolor sit amet",
                "synonyms": ["home", "lorem", "ipsum" ],
                "sentences":["The house is old.", "The house is green."],
                "tags":["Lorem", "Ipsum", "Family"],
                "additionalInfos":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt felis sed dui dignissim aliquam. Suspendisse finibus leo purus, nec sodales lacus rutrum ac. Vivamus id vehicula enim, a pharetra ligula. Ut ullamcorper molestie mauris, et bibendum velit faucibus eget. Sed tincidunt tellus leo, vel sagittis tortor gravida euismod. Fusce eu purus mi. Cras consectetur vehicula velit non egestas. Morbi hendrerit sagittis orci, vel tincidunt nibh sollicitudin eu. Donec posuere nibh vel sem mollis, vel feugiat dui accumsan. Proin vitae magna in dolor ultrices auctor eget quis risus. Sed eros mauris, vulputate at justo vel, pretium volutpat massa. Ut mollis quis felis nec placerat."
            }
        ]
    }
}

```

## Find all words

```
Need bearer token

POST https://i-blatt-be.onrender.com/api/words

Response body:
{
    [
            "_id": "64248c0bcaf8f47de8a4d048",
            "nativeWord": "Eu",
            "image": "https://picsum.photos/seed/picsum/200/300",
            "creator": "64247c2eff167550e59ad0ba",
            "wordType": "PRONOUN",
            "rating": 4,
            "timestampAccess": [
                "2023-03-29T17:58:06.135Z",
                "2001-01-23T00:00:00.000Z"
            ],
            "foreignWordData": {
                "verbType": [
                    {
                        "language": "English",
                        "foreignWord": "I",
                        "synonyms": [
                            "home",
                            "lorem",
                            "ipsum"
                        ],
                        "sentences": [
                            "The house is old.",
                            "The house is green."
                        ],
                        "tags": [
                            "Lorem",
                            "Ipsum",
                            "Family"
                        ],
                        "additionalInfos": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt felis sed dui dignissim aliquam. Suspendisse finibus leo purus, nec sodales lacus rutrum ac. Vivamus id vehicula enim, a pharetra ligula. Ut ullamcorper molestie mauris, et bibendum velit faucibus eget. Sed tincidunt tellus leo, vel sagittis tortor gravida euismod. Fusce eu purus mi. Cras consectetur vehicula velit non egestas. Morbi hendrerit sagittis orci, vel tincidunt nibh sollicitudin eu. Donec posuere nibh vel sem mollis, vel feugiat dui accumsan. Proin vitae magna in dolor ultrices auctor eget quis risus. Sed eros mauris, vulputate at justo vel, pretium volutpat massa. Ut mollis quis felis nec placerat.",
                        "_id": "64248c0bcaf8f47de8a4d04a"
                    }
                ],
                "_id": "64248c0bcaf8f47de8a4d049",
                "nounType": [],
                "adjectiveType": [],
                "pronounType": [],
                "connectionType": []
            },
            "createdAt": "2023-03-29T19:05:47.430Z",
            "updatedAt": "2023-03-29T19:05:47.430Z",
            "__v": 0
        },
        {
            "_id": "64248c2fcaf8f47de8a4d04d",
            "nativeWord": "Mais",
            "image": "https://picsum.photos/seed/picsum/200/300",
            "creator": "64247c2eff167550e59ad0ba",
            "wordType": "PRONOUN",
            "rating": 4,
            "timestampAccess": [
                "2023-03-29T17:58:06.135Z",
                "2001-01-23T00:00:00.000Z"
            ],
            "foreignWordData": {
                "verbType": [
                    {
                        "language": "English",
                        "foreignWord": "plus",
                        "synonyms": [
                            "home",
                            "lorem",
                            "ipsum"
                        ],
                        "sentences": [
                            "The house is old.",
                            "The house is green."
                        ],
                        "tags": [
                            "Lorem",
                            "Ipsum",
                            "Family"
                        ],
                        "additionalInfos": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt felis sed dui dignissim aliquam. Suspendisse finibus leo purus, nec sodales lacus rutrum ac. Vivamus id vehicula enim, a pharetra ligula. Ut ullamcorper molestie mauris, et bibendum velit faucibus eget. Sed tincidunt tellus leo, vel sagittis tortor gravida euismod. Fusce eu purus mi. Cras consectetur vehicula velit non egestas. Morbi hendrerit sagittis orci, vel tincidunt nibh sollicitudin eu. Donec posuere nibh vel sem mollis, vel feugiat dui accumsan. Proin vitae magna in dolor ultrices auctor eget quis risus. Sed eros mauris, vulputate at justo vel, pretium volutpat massa. Ut mollis quis felis nec placerat.",
                        "_id": "64248c2fcaf8f47de8a4d04f"
                    }
                ],
                "_id": "64248c2fcaf8f47de8a4d04e",
                "nounType": [],
                "adjectiveType": [],
                "pronounType": [],
                "connectionType": []
            },
            "createdAt": "2023-03-29T19:06:23.369Z",
            "updatedAt": "2023-03-29T19:06:23.369Z",
            "__v": 0
        }
    ]
}
```

## Find word by id:

```
Need bearer token

GET https://i-blatt-be.onrender.com/api/word/64248c2fcaf8f47de8a4d04d

Response body:
{
    "_id": "64248c0bcaf8f47de8a4d048",
    "nativeWord": "Eu",
    "image": "https://picsum.photos/seed/picsum/200/300",
    "creator": "64247c2eff167550e59ad0ba",
    "wordType": "PRONOUN",
    "rating": 4,
    "timestampAccess": [
        "2023-03-29T17:58:06.135Z",
        "2001-01-23T00:00:00.000Z"
    ],
    "foreignWordData": {
        "verbType": [
            {
                "language": "English",
                "foreignWord": "I",
                "synonyms": [
                    "home",
                    "lorem",
                    "ipsum"
                ],
                "sentences": [
                    "The house is old.",
                    "The house is green."
                ],
                "tags": [
                    "Lorem",
                    "Ipsum",
                    "Family"
                ],
                "additionalInfos": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt felis sed dui dignissim aliquam. Suspendisse finibus leo purus, nec sodales lacus rutrum ac. Vivamus id vehicula enim, a pharetra ligula. Ut ullamcorper molestie mauris, et bibendum velit faucibus eget. Sed tincidunt tellus leo, vel sagittis tortor gravida euismod. Fusce eu purus mi. Cras consectetur vehicula velit non egestas. Morbi hendrerit sagittis orci, vel tincidunt nibh sollicitudin eu. Donec posuere nibh vel sem mollis, vel feugiat dui accumsan. Proin vitae magna in dolor ultrices auctor eget quis risus. Sed eros mauris, vulputate at justo vel, pretium volutpat massa. Ut mollis quis felis nec placerat.",
                "_id": "64248c0bcaf8f47de8a4d04a"
            }
        ],
        "_id": "64248c0bcaf8f47de8a4d049",
        "nounType": [],
        "adjectiveType": [],
        "pronounType": [],
        "connectionType": []
    },
    "createdAt": "2023-03-29T19:05:47.430Z",
    "updatedAt": "2023-03-29T19:05:47.430Z",
    "__v": 0        
}
```


## Update word:

```
Need bearer token

PATCH https://i-blatt-be.onrender.com/api/word/64248c2fcaf8f47de8a4d04d

For now, you need to pass entire existing object with new changes.
TODO: When required, allow chiold elements to be update, even some properties

```
## **Upload image:**

```
Need bearer token

Allowed extensions: .png, .gif, .jpg, .jpeg

POST https://i-blatt-be.onrender.com/api/image

form-data: imagename.xxx

```

## Download **image:**

```
Need bearer token

Allowed extensions: .png, .gif, .jpg, .jpeg

GET https://i-blatt-be.onrender.com/api/image

query params:
key=imagename.xxx

full URL example
GET https://i-blatt-be.onrender.com/api/image?key=Apresentação1.png

/!\ The images stored on S3 is not public. Only the user configured on application has access to download it.
```

## Delete **image:**

```
Need bearer token

DELETE https://i-blatt-be.onrender.com/api/image/imagename.xxx
```