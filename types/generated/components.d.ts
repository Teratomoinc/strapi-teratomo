import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedBasicItem extends Schema.Component {
  collectionName: 'components_shared_basic_items';
  info: {
    displayName: 'basicItem';
    icon: 'bell';
  };
  attributes: {
    icon: Attribute.String;
    title: Attribute.String;
    text: Attribute.Text;
  };
}

export interface SharedContacts extends Schema.Component {
  collectionName: 'components_shared_contacts';
  info: {
    displayName: 'contacts';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    callToAction: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    text: Attribute.String;
  };
}

export interface SharedItemValue extends Schema.Component {
  collectionName: 'components_shared_item_values';
  info: {
    displayName: 'item-value';
    icon: 'book';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    link: Attribute.String;
    description: Attribute.Text;
    icon: Attribute.Media;
  };
}

export interface SharedMedia extends Schema.Component {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Attribute.Media;
  };
}

export interface SharedProducts extends Schema.Component {
  collectionName: 'components_shared_products';
  info: {
    displayName: 'products';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    link: Attribute.String & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
  };
}

export interface SharedQuote extends Schema.Component {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    title: Attribute.String;
    body: Attribute.Text;
  };
}

export interface SharedRichText extends Schema.Component {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Attribute.RichText;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
    shareImage: Attribute.Media;
  };
}

export interface SharedSlider extends Schema.Component {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Attribute.Media;
  };
}

export interface SharedTeamList extends Schema.Component {
  collectionName: 'components_shared_team_lists';
  info: {
    displayName: 'TeamList';
    icon: 'brush';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    position: Attribute.String & Attribute.Required;
    avatar: Attribute.String & Attribute.Required;
    description: Attribute.Blocks;
    color: Attribute.String & Attribute.Required;
    quote: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.basic-item': SharedBasicItem;
      'shared.contacts': SharedContacts;
      'shared.item-value': SharedItemValue;
      'shared.media': SharedMedia;
      'shared.products': SharedProducts;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.team-list': SharedTeamList;
    }
  }
}
