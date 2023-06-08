// maps id = 6d4be9992b8a1585
// api key = AIzaSyAyKMVZI36-B3HWUgQrcFceMddTU1LYxn4
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 51.51483239990959, lng: -0.11329790205263511 },
    zoom: 13,
    // mapId: "6d4be9992b8a1585",
    mapId: "1f7e9a15e1e7522f",
  });

  const markers = [
    ["St paul's", 51.513817134096314, -0.09832983359800725, "img url", 38, 31],
    [
      "The Gerking",
      51.514624206006275,
      -0.08028476079328786,
      "img url",
      38,
      31,
    ],
    [
      "Palace Of Westmister",
      51.501538617038705,
      -0.12443438012207059,
      "img url",
      38,
      31,
    ],
    [
      "Buckingham Palace",
      51.50227001048463,
      -0.1418512972253651,
      "imgUrls",
      38,
      31,
    ],
    [
      "British Museum",
      51.51951888728459,
      -0.12685339638641707,
      "imgurl",
      38,
      31,
    ],
    [
      "Saint Pancras",
      51.53001126753637,
      -0.12547110195452615,
      "img url",
      38,
      31,
    ],
  ];

  for (let i = 0; i < markers.length; i++) {
    const currentMarker = markers[i];

    const marker = new google.maps.Marker({
      position: { lat: currentMarker[1], lng: currentMarker[2] },

      map,
      title: currentMarker[0],

      icon: {
        // url: currentMarker[3],
        scaleSize: new google.maps.Size(currentMarker[4], currentMarker[5]),
      },
      animation: google.maps.Animation.DROP,
    });
    let infowindow = new google.maps.InfoWindow({
      content: currentMarker[0],
    });

    marker.addListener("click", () => {
      infowindow.open(map, marker);
    });
    // marker.addListener("closeclick", () => {
    //   infowindow.close(map, marker);
    // });
  }
}

// westimster 51.501538617038705, -0.12443438012207059
// bukingam palace 51.50227001048463, -0.1418512972253651
// btrsh museum 51.51951888728459, -0.12685339638641707
// st pankras 51.53001126753637, -0.12547110195452615
// the gerking 51.514624206006275, -0.08028476079328786
//  san paul {lat: 51.513817134096314, lng: -0.09832983359800725}
// https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=skog%20haus&inputtype=textquery&fields=name,icon_mask_base_uri,icon_background_color&key=AIzaSyAyKMVZI36-B3HWUgQrcFceMddTU1LYxn4
