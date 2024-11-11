import { createSlice } from "@reduxjs/toolkit";

const contentSlice = createSlice({
  name: "content",
  initialState: {
    contents: [
      {
        author: "Mert Kuldemir",
        id: "ais-approach-direction",
        name: "AI's approach direction",
        date: "31.10.2024",
        imageURL: "https://cdn.mos.cms.futurecdn.net/VFLt5vHV7aCoLrLGjP9Qwm-650-80.jpg.webp",
        like: 0,
        content: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pulvinar purus diam, eu venenatis magna dapibus nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel tempus justo. Curabitur gravida lorem blandit, imperdiet mi eu, feugiat lacus. Cras dui arcu, iaculis sit amet ante eget, maximus mollis mauris. Sed eu molestie sem. Fusce rutrum neque dui, non faucibus arcu luctus ac. Donec tristique ultrices lacus. Suspendisse egestas, nisi vitae tempus elementum, felis ex tempor urna, in vehicula urna dolor eget elit. Nam eget mi mi. Maecenas sed tempor ipsum. Nullam ut ligula suscipit, eleifend felis et, dapibus tellus. Duis nec felis blandit, volutpat felis non, aliquet mi. Praesent eleifend turpis eu arcu ultrices faucibus. Sed egestas convallis posuere.",
          "Phasellus fermentum enim eu ante eleifend, eget aliquam est malesuada. Nunc tempus laoreet dui, eget pulvinar nisl laoreet et. Sed viverra ipsum eget neque dignissim, ac eleifend urna consectetur. Cras imperdiet orci a sem finibus, quis rhoncus ante iaculis. Maecenas id gravida nulla, vel lobortis mauris. Quisque blandit tincidunt nulla, eu pretium sapien. Etiam maximus sem vitae euismod auctor. In non augue sem. Nunc a nulla sit amet odio ultrices pretium. Ut purus sem, ultricies in eros posuere, mollis tincidunt velit. Sed id vehicula nisl, in scelerisque leo.",
          "Curabitur nisi quam, scelerisque id nunc at, feugiat vehicula ipsum. In in faucibus neque, non facilisis risus. Cras mauris ante, volutpat nec mi dapibus, malesuada sodales felis. Maecenas laoreet interdum est, quis feugiat turpis faucibus sed. Integer blandit risus sed augue consectetur pellentesque. Mauris ut ipsum quis ligula tincidunt venenatis quis at eros. Aenean vitae malesuada ipsum. Nam semper, turpis ut vestibulum vulputate, est sem varius neque, non facilisis libero lectus nec erat. Morbi vitae hendrerit nibh.",
          "Ut ornare orci ac orci rhoncus suscipit. Nunc ornare laoreet ullamcorper. Vivamus convallis nunc in sem dignissim lobortis vel ac velit. Mauris auctor massa nisl. Phasellus a augue eu diam dapibus dapibus sed vestibulum lacus. Donec felis dui, suscipit a purus quis, rutrum pharetra sapien. Praesent ut mattis est, ut pulvinar dui. Morbi vitae commodo ligula. Aliquam erat volutpat.",
          "Donec euismod lacinia lorem eu mollis. Maecenas sollicitudin mauris at diam mattis semper. Nam dictum dolor et pretium faucibus. Donec commodo, tellus nec mattis viverra, lacus augue tempus velit, sit amet varius lorem lectus eget arcu. Fusce semper, nisl ac dignissim gravida, odio libero ultricies sapien, sed varius lorem dui quis purus. Donec viverra eros massa, a iaculis mauris tempor nec. Nam mauris nulla, elementum nec massa ac, imperdiet sodales sem. Ut aliquet metus in mi condimentum, vel molestie massa ullamcorper. Phasellus at pellentesque leo. Sed et diam nec sapien convallis laoreet. In viverra fringilla magna, eget pulvinar felis pretium vitae.",
        ],
        comments: [
          {
            id: 0,
            user: "Melisa Kuldemir",
            userAvatar:
              "https://fastly.picsum.photos/id/6/200/200.jpg?hmac=g4Q9Vcu5Ohm8Rwap3b6HSIxUfIALZ6BasESHhw7VjLE",
            commentText: "This article is awesome!",
          },
          {
            id: 1,
            user: "Deniz Kuldemir",
            userAvatar:
              "https://fastly.picsum.photos/id/1029/200/200.jpg?hmac=CQyxD4azaGb2UDjepBq254UP9v1mF-_rBhYVx8Jw8rs",
            commentText: "Thanks for this article.",
          },
          {
            id: 2,
            user: "Burak Dünal",
            userAvatar:
              "https://fastly.picsum.photos/id/453/200/200.jpg?hmac=IO3u3eOcKSOUCe8J1IlvctdxPKLTh5wFXvBT4O3BNs4",
            commentText: "I've been waiting for this article since i've started to search about AI. Thanks to you!",
          },
        ],
      },
      {
        author: "Mert Kuldemir",
        id: "is-iot-future",
        name: "Is IOT the future of the world's technology?",
        date: "25.10.2024",
        imageURL:
          "https://images.unsplash.com/photo-1702390796625-6dd9b46b1c0b?q=80&w=1960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        like: 0,
        content: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse urna sapien, imperdiet sit amet fermentum sed, vulputate a augue. Maecenas euismod at neque dictum suscipit. Pellentesque vitae hendrerit ligula. In varius lectus id dapibus dignissim. Duis sollicitudin et purus eu dictum. Nunc consequat porttitor elit, id cursus justo hendrerit id. Duis scelerisque elit mattis velit congue, sit amet imperdiet augue malesuada. Mauris pellentesque mauris tellus, at faucibus mauris laoreet a. Curabitur id lectus porttitor ante congue tristique.",
          "Suspendisse non luctus massa, id molestie magna. In fringilla volutpat augue. Phasellus libero tellus, varius vitae sem elementum, finibus vestibulum lacus. Fusce id convallis velit. Nulla vitae convallis augue, eu fringilla ante. Ut euismod lacus vitae metus euismod gravida. Nam condimentum facilisis rhoncus. Sed lectus mauris, facilisis id aliquet ac, condimentum ut lacus. Pellentesque dictum, purus nec egestas consectetur, tellus urna interdum urna, eu gravida lorem libero sed augue. Donec pretium nibh ut felis egestas, et molestie ligula mattis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed quis tellus eros. Etiam nec nisl ac risus porttitor placerat tempor ac lorem. Mauris dictum lacus quis sagittis rhoncus.",
          "Nulla sed mauris sodales, pretium odio a, vulputate lectus. Sed finibus, nulla in molestie molestie, augue massa malesuada odio, vitae tempor enim quam non urna. Aliquam dictum, arcu consequat vehicula porttitor, odio massa vulputate nibh, at feugiat massa metus et dolor. Curabitur et turpis consectetur, scelerisque dolor non, pretium mauris. Proin venenatis commodo sem eget luctus. Pellentesque non pulvinar nibh. Donec tellus dolor, ullamcorper ac mi et, convallis vestibulum elit. Etiam elementum ultrices metus non porta. Phasellus rutrum nulla id tincidunt malesuada. Integer hendrerit velit vel feugiat mattis.",
          "Maecenas in magna vehicula, blandit nisi at, faucibus magna. Quisque libero mi, lacinia lobortis dapibus vulputate, fringilla sit amet mi. Etiam congue in tortor non eleifend. In commodo non odio id posuere. Sed enim eros, bibendum in metus in, posuere fringilla felis. Vestibulum maximus augue purus, ut congue quam aliquam vitae. Vivamus porttitor libero ac odio dapibus tincidunt vitae ut nisi. Ut nec tortor eget ligula hendrerit dapibus. Praesent consequat commodo metus, a mollis purus consequat id. Suspendisse tortor magna, interdum id eros quis, tempor rhoncus mi. Vestibulum arcu eros, vehicula non pharetra at, rutrum non est. Etiam tincidunt ligula sed odio dignissim, vitae ultrices felis posuere. Suspendisse volutpat justo ac molestie volutpat. Phasellus blandit tincidunt elit varius iaculis.",
          "Etiam odio sem, rhoncus nec tellus nec, venenatis sollicitudin metus. Cras pulvinar, ligula sed venenatis volutpat, elit dui porta nisi, semper congue sem eros vitae erat. Duis in ex nec leo lobortis placerat. Curabitur a velit justo. Vestibulum cursus, lorem et suscipit lobortis, mauris quam maximus leo, nec faucibus neque urna ac nibh. Donec bibendum elit ac felis scelerisque, et placerat sapien varius. Praesent nisi odio, sodales ac sodales et, tincidunt et nisi. In id consectetur dui. Donec efficitur facilisis sem ac pulvinar. Donec magna eros, ornare vitae urna ut, luctus egestas elit.",
        ],
        comments: [
          {
            id: 0,
            user: "Melisa Kuldemir",
            userAvatar:
              "https://fastly.picsum.photos/id/6/200/200.jpg?hmac=g4Q9Vcu5Ohm8Rwap3b6HSIxUfIALZ6BasESHhw7VjLE",
            commentText: "This article is awesome!",
          },
        ],
      },
      {
        author: "Mert Kuldemir",
        id: "cyber-security",
        name: "Cyber Security is the most important thing for your website health",
        date: "20.10.2024",
        imageURL:
          "https://images.unsplash.com/photo-1483817101829-339b08e8d83f?q=80&w=2004&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        like: 0,
        content: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat at erat a pretium. Vestibulum et accumsan turpis, eget consectetur magna. Sed porta orci eget mi elementum, ac facilisis lorem gravida. Suspendisse et sapien ac elit semper aliquet at at magna. Etiam ut felis quis tortor finibus tristique ut id ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec vehicula sem et nulla blandit, quis porttitor massa ullamcorper. Suspendisse pretium venenatis neque sed sollicitudin. Pellentesque risus turpis, pharetra id faucibus id, elementum sit amet arcu. Pellentesque nec fermentum lectus, quis ullamcorper risus. Nullam porta aliquet rutrum. Etiam eu dolor sit amet mi tempus lobortis faucibus a diam. Ut eget tempus sem. Nam eleifend efficitur consectetur. Sed sollicitudin imperdiet elit at sollicitudin.",
          "Nam consectetur gravida ullamcorper. Pellentesque luctus quis magna id dapibus. Ut vitae velit ac lacus finibus dignissim. Mauris facilisis volutpat arcu, sed condimentum velit iaculis eu. Quisque porttitor ex ac blandit tincidunt. Nunc sollicitudin fermentum odio, in ullamcorper urna luctus sit amet. Nulla nec scelerisque lacus.",
          "Vestibulum orci est, finibus in ligula quis, dictum tristique nunc. Sed sed congue dui. In at risus dolor. Nam porta ultricies dui et congue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras viverra arcu quis maximus ultricies. Vivamus in finibus urna, hendrerit mattis leo. Integer feugiat nisi et metus porttitor ornare. Quisque ipsum odio, elementum vitae pretium at, pellentesque vitae sem. Donec in ultrices leo. Aliquam erat volutpat. Ut varius rhoncus ex, quis finibus velit consequat ut. Nunc cursus sodales mattis. Sed sed purus purus. Fusce vitae nisl id lorem imperdiet aliquet. Nam venenatis elementum mauris viverra eleifend.",
          "Fusce ornare sem et mi pretium, eu vulputate ligula placerat. Donec at lobortis libero. Sed hendrerit risus ex, a tristique ligula varius eget. Aliquam in turpis diam. Pellentesque molestie magna eu est ornare, vitae condimentum purus commodo. Praesent et diam diam. Suspendisse vel porta massa, vel ornare tortor. Vestibulum in quam ac ligula consequat interdum ut a massa. Etiam eu leo vitae ante consectetur posuere at in turpis. Phasellus libero augue, vehicula rutrum gravida et, suscipit sed sem. Sed dui ex, laoreet sed tincidunt nec, blandit sed arcu. Proin scelerisque molestie facilisis. Sed sed dictum turpis. Praesent quis elementum risus. Vivamus nec felis orci. Etiam sapien eros, ultricies sed vestibulum ac, bibendum in dolor.",
          "Duis aliquet massa non tortor dapibus, quis semper magna facilisis. Aliquam placerat massa velit, sit amet interdum felis pulvinar eget. Sed id velit viverra, mattis justo eget, accumsan sapien. In sit amet ullamcorper ligula. Mauris vehicula mauris eget massa auctor efficitur. Sed et diam massa. Donec at quam ut erat tempor lobortis. Mauris finibus nunc in purus semper bibendum id eget ligula. Integer commodo cursus mi nec sodales. Vestibulum non mi commodo, hendrerit elit quis, suscipit sapien. Phasellus hendrerit at leo vitae accumsan. Pellentesque in ante quis sapien facilisis laoreet ut in eros. Morbi faucibus vel est id faucibus. Curabitur a risus lobortis, porttitor augue porttitor, dictum felis.",
        ],
        comments: [
          {
            id: 0,
            user: "Deniz Kuldemir",
            userAvatar:
              "https://fastly.picsum.photos/id/1029/200/200.jpg?hmac=CQyxD4azaGb2UDjepBq254UP9v1mF-_rBhYVx8Jw8rs",
            commentText: "Thanks for this article.",
          },
        ],
      },
    ],
  },
  reducers: {
    increaseLike: (state, action) => {
      state.contents[action.payload].like = state.contents[action.payload].like + 1;
    },
    decreaseLike: (state, action) => {
      state.contents[action.payload].like = state.contents[action.payload].like - 1;
    },
    updateComment: (state, action) => {
      state.contents[action.payload[0]].comments.unshift({
        id: action.payload[1],
        user: action.payload[2],
        userAvatar: action.payload[3],
        commentText: action.payload[4],
      });
    },
    updateContentAvatar: (state, action) => {
      // for (let i = 0; i < state.contents.length; i++) {
      //   for (let j = 0; j < state.contents[i].comments.length; j++) {
      //     return state.contents[i].comments[j].userAvatar === action.payload[1];
      //   }
      // }
      return state.contents[action.payload[0]].comments[action.payload[1]].userAvatar === action.payload[2];
    },
  },
});

export const { increaseLike, decreaseLike, updateComment, updateContentAvatar } = contentSlice.actions;
export default contentSlice.reducer;
