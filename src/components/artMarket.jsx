import React, { Component } from "react";
import ArtCard from "./artCard";
import PostImageForm from "./postImageForm";
import "./artCard.css";

class ArtMarket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        {
          id: 0,
          artist: "Pinterest",
          url: "https://i.pinimg.com/564x/d8/c8/2e/d8c82e63f392fa7c8ab6236d3b3be931.jpg",
        },
        {
          id: 1,
          artist: "Pinterest",
          url: "https://i.pinimg.com/564x/81/fd/47/81fd47a51096426de0b7cafb7c183837.jpg",
        },
        {
          id: 2,
          artist: "Pinterest",
          url: "https://cdn.vox-cdn.com/thumbor/heXu37IbDvVy6Qbo1wbPjNvi6Ys=/0x0:712x423/1200x800/filters:focal(385x120:497x232)/cdn.vox-cdn.com/uploads/chorus_image/image/55531035/Screen_Shot_2017_06_30_at_3.17.00_PM.0.png",
        },
        {
          id: 3,
          artist: "Pinterest",
          url: "https://www.giantbomb.com/a/uploads/scale_small/8/89064/1334882-312e302e302e38322d3534.jpg",
        },
        {
          id: 4,
          artist: "Pinterest",
          url: "https://efi.int/sites/default/files/2020-12/placeholder.jpeg",
        },
      ],
    };
    //we need to bind functions. otherwise we cant use "this" outside the constructor!
    this.imageFormCallback = this.imageFormCallback.bind(this);
    this.imageDeleteCallback = this.imageDeleteCallback.bind(this);
  }

  imageFormCallback(artist, url) {
    let imageCount = this.state.images.length;
    //setstate re renders ui automatically so we dont need to call it again
    this.setState({
      images: [
        ...this.state.images,
        { id: imageCount, artist: artist, url: url },
      ],
    });
  }

  imageDeleteCallback(imageId) {
    var newImages = [...this.state.images];
    var imageToDeleteIndex = -1;
    var currentIndex = 0;
    newImages.forEach(function (image) {
      if (image.id === imageId) {
        imageToDeleteIndex = currentIndex;
      }
      currentIndex++;
    });
    if (imageToDeleteIndex !== -1) {
      newImages.splice(imageToDeleteIndex, 1);
      this.setState({ images: newImages });
    }
  }

  render() {
    return (
      <div className="d-flex flex-column align-items-center  w-100 px-5  mx-auto">
        <h1 className="text-light mb-5 mt-3">Art Gallery</h1>
        <div className="row justify-content-center w-100">
          <div className="col-6 col-sm-6 col-md-4 col-lg-3">
            <PostImageForm callback={this.imageFormCallback} />
          </div>
          <div className="col-12 col-sm-9 card-group">
            <div className="row w-100">
              {this.state.images.map((img) => (
                <ArtCard
                  artist={img.artist}
                  url={img.url}
                  id={img.id}
                  key={img.id}
                  callback={this.imageDeleteCallback}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ArtMarket;
