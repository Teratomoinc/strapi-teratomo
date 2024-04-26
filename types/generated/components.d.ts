import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedAddress extends Schema.Component {
  collectionName: 'components_shared_addresses';
  info: {
    displayName: 'Address';
    description: '';
  };
  attributes: {
    latitude: Attribute.String;
    longitude: Attribute.String;
    addressName: Attribute.String;
    mapLink: Attribute.Text;
  };
}

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

export interface SharedBasicTemplate extends Schema.Component {
  collectionName: 'components_shared_basic_templates';
  info: {
    displayName: 'basicTemplate';
    icon: 'briefcase';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    description: Attribute.Text;
    items: Attribute.Component<'shared.items-template-home', true>;
  };
}

export interface SharedBrandsTemplate extends Schema.Component {
  collectionName: 'components_shared_brands_templates';
  info: {
    displayName: 'brandsTemplate';
    icon: 'bell';
  };
  attributes: {
    name: Attribute.String;
    link: Attribute.String & Attribute.DefaultTo<'#'>;
    description: Attribute.Text;
    icon: Attribute.Media & Attribute.Required;
  };
}

export interface SharedCardTemplate extends Schema.Component {
  collectionName: 'components_shared_card_templates';
  info: {
    displayName: 'cardTemplate';
  };
  attributes: {
    tag: Attribute.String;
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
  };
}

export interface SharedContactUs extends Schema.Component {
  collectionName: 'components_shared_contactuses';
  info: {
    displayName: 'contactUs';
    icon: 'arrowUp';
    description: '';
  };
  attributes: {
    tag: Attribute.String;
    title: Attribute.String;
    description: Attribute.Text;
    inputs: Attribute.Component<'shared.input-template', true>;
    button: Attribute.String;
  };
}

export interface SharedContactsTemplate extends Schema.Component {
  collectionName: 'components_shared_contacts_templates';
  info: {
    displayName: 'contactsTemplate';
    icon: 'cast';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    callToAction: Attribute.Boolean & Attribute.DefaultTo<false>;
    link: Attribute.String;
    text: Attribute.String;
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

export interface SharedContacttemplate extends Schema.Component {
  collectionName: 'components_shared_contacttemplates';
  info: {
    displayName: 'contacttemplate';
    icon: 'briefcase';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    description: Attribute.Text;
    items: Attribute.Component<'shared.contacts-template', true>;
  };
}

export interface SharedEvolutionTemplate extends Schema.Component {
  collectionName: 'components_shared_evolution_templates';
  info: {
    displayName: 'evolutionTemplate';
    icon: 'attachment';
  };
  attributes: {
    sub: Attribute.String;
    title: Attribute.String;
    items: Attribute.Component<'shared.items-evolutiontemplate', true>;
  };
}

export interface SharedEvolution extends Schema.Component {
  collectionName: 'components_shared_evolutions';
  info: {
    displayName: 'evolution';
    icon: 'bold';
    description: '';
  };
  attributes: {
    sub: Attribute.String;
    title: Attribute.String;
    items: Attribute.Component<'shared.items-find', true>;
  };
}

export interface SharedFeatures extends Schema.Component {
  collectionName: 'components_shared_features';
  info: {
    displayName: 'features';
    icon: 'arrowUp';
  };
  attributes: {
    tag: Attribute.String;
    icon: Attribute.String;
    text: Attribute.Text;
    title: Attribute.String;
  };
}

export interface SharedFeaturestemplate extends Schema.Component {
  collectionName: 'components_shared_featurestemplates';
  info: {
    displayName: 'featurestemplate';
    icon: 'bold';
  };
  attributes: {
    tag: Attribute.String;
    icon: Attribute.String;
    text: Attribute.Text;
    title: Attribute.String;
  };
}

export interface SharedFooter extends Schema.Component {
  collectionName: 'components_shared_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {};
}

export interface SharedHeroHomeTemplate extends Schema.Component {
  collectionName: 'components_shared_hero_home_templates';
  info: {
    displayName: 'heroHomeTemplate';
    icon: 'attachment';
  };
  attributes: {
    title: Attribute.String;
    ownerName: Attribute.String;
    ownerDescription: Attribute.Text;
  };
}

export interface SharedHeroTemplate extends Schema.Component {
  collectionName: 'components_shared_hero_templates';
  info: {
    displayName: 'heroTemplate';
    icon: 'attachment';
  };
  attributes: {
    sub: Attribute.String;
    tag: Attribute.String;
    quote: Attribute.Text;
    title: Attribute.String;
  };
}

export interface SharedHero extends Schema.Component {
  collectionName: 'components_shared_heroes';
  info: {
    displayName: 'hero';
    icon: 'bold';
  };
  attributes: {
    sub: Attribute.String;
    tag: Attribute.String;
    quote: Attribute.Text;
    title: Attribute.String;
  };
}

export interface SharedInputTemplate extends Schema.Component {
  collectionName: 'components_shared_input_templates';
  info: {
    displayName: 'inputTemplate';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    placeholder: Attribute.String;
    key: Attribute.String;
    errorMessage: Attribute.String;
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

export interface SharedItemsEvolutiontemplate extends Schema.Component {
  collectionName: 'components_shared_items_evolutiontemplates';
  info: {
    displayName: 'itemsEvolutiontemplate';
    icon: 'arrowDown';
  };
  attributes: {
    text: Attribute.Text;
  };
}

export interface SharedItemsFind extends Schema.Component {
  collectionName: 'components_shared_items_finds';
  info: {
    displayName: 'itemsFind';
    icon: 'book';
  };
  attributes: {
    text: Attribute.Text;
  };
}

export interface SharedItemsTemplateHome extends Schema.Component {
  collectionName: 'components_shared_items_template_homes';
  info: {
    displayName: 'itemsTemplateHome';
    icon: 'arrowDown';
  };
  attributes: {
    icon: Attribute.String;
    title: Attribute.String;
    text: Attribute.Text;
  };
}

export interface SharedItemsTemplate extends Schema.Component {
  collectionName: 'components_shared_items_templates';
  info: {
    displayName: 'itemsTemplate';
    icon: 'attachment';
  };
  attributes: {
    img: Attribute.String;
    text: Attribute.Text;
    title: Attribute.String;
  };
}

export interface SharedItems extends Schema.Component {
  collectionName: 'components_shared_items';
  info: {
    displayName: 'items';
    icon: 'attachment';
  };
  attributes: {
    img: Attribute.String;
    text: Attribute.Text;
    title: Attribute.String;
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

export interface SharedMenuItemsTemplate extends Schema.Component {
  collectionName: 'components_shared_menu_items_templates';
  info: {
    displayName: 'menuItemsTemplate';
    icon: 'briefcase';
  };
  attributes: {
    lang: Attribute.String;
    text: Attribute.String;
  };
}

export interface SharedMenuTemplate extends Schema.Component {
  collectionName: 'components_shared_menu_templates';
  info: {
    displayName: 'menuTemplate';
    icon: 'briefcase';
  };
  attributes: {
    title: Attribute.String;
    items: Attribute.Component<'shared.menu-items-template', true>;
  };
}

export interface SharedMetadaTemplate extends Schema.Component {
  collectionName: 'components_shared_metada_templates';
  info: {
    displayName: 'metadaTemplate';
    icon: 'car';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    keywords: Attribute.Text;
    images: Attribute.Media;
  };
}

export interface SharedMissionTemplate extends Schema.Component {
  collectionName: 'components_shared_mission_templates';
  info: {
    displayName: 'missionTemplate';
    icon: 'bold';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    description: Attribute.Text;
  };
}

export interface SharedNavItem extends Schema.Component {
  collectionName: 'components_shared_nav_items';
  info: {
    displayName: 'navItem';
  };
  attributes: {
    link: Attribute.String;
    title: Attribute.String;
    subItems: Attribute.Component<'shared.sub-nav-items', true>;
  };
}

export interface SharedOnboardingTemplate extends Schema.Component {
  collectionName: 'components_shared_onboarding_templates';
  info: {
    displayName: 'onboardingTemplate';
    icon: 'brush';
    description: '';
  };
  attributes: {
    buttonBack: Attribute.String;
    buttonNext: Attribute.String;
    buttonStart: Attribute.String;
    buttonFinish: Attribute.String;
    steps: Attribute.Component<'shared.step-template', true>;
    inputs: Attribute.Component<'shared.input-template', true>;
    finishLink: Attribute.String;
    metadata: Attribute.Component<'shared.metada-template'>;
  };
}

export interface SharedProcessItemTemplate extends Schema.Component {
  collectionName: 'components_shared_process_item_templates';
  info: {
    displayName: 'processItemTemplate';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    icon: Attribute.Media;
  };
}

export interface SharedProcessTemplate extends Schema.Component {
  collectionName: 'components_shared_process_templates';
  info: {
    displayName: 'processTemplate';
  };
  attributes: {
    items: Attribute.Component<'shared.process-item-template', true>;
    title: Attribute.String;
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

export interface SharedReviewTemplate extends Schema.Component {
  collectionName: 'components_shared_review_templates';
  info: {
    displayName: 'reviewTemplate';
  };
  attributes: {
    tag: Attribute.String;
    title: Attribute.String;
    subtitle: Attribute.Text;
    reviews: Attribute.Relation<
      'shared.review-template',
      'oneToMany',
      'api::review.review'
    >;
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

export interface SharedServicesTemplate extends Schema.Component {
  collectionName: 'components_shared_services_templates';
  info: {
    displayName: 'servicesTemplate';
    icon: 'book';
  };
  attributes: {
    img: Attribute.String;
    tag: Attribute.String;
    text: Attribute.Text;
    title: Attribute.String;
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

export interface SharedStatsTemplate extends Schema.Component {
  collectionName: 'components_shared_stats_templates';
  info: {
    displayName: 'statsTemplate';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    color: Attribute.String;
    percentage: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 0;
          max: 100;
        },
        number
      >;
  };
}

export interface SharedStepTemplate extends Schema.Component {
  collectionName: 'components_shared_step_templates';
  info: {
    displayName: 'stepTemplate';
    description: '';
  };
  attributes: {
    tag: Attribute.String;
    title: Attribute.String;
    description: Attribute.Text;
    key: Attribute.String;
  };
}

export interface SharedStudiesTemplate extends Schema.Component {
  collectionName: 'components_shared_studies_templates';
  info: {
    displayName: 'studiesTemplate';
    icon: 'arrowUp';
  };
  attributes: {
    sub: Attribute.String;
    tag: Attribute.String;
    title: Attribute.String;
    items: Attribute.Component<'shared.items-template', true>;
  };
}

export interface SharedStudies extends Schema.Component {
  collectionName: 'components_shared_studies';
  info: {
    displayName: 'studies';
    icon: 'bell';
    description: '';
  };
  attributes: {
    sub: Attribute.String;
    tag: Attribute.String;
    title: Attribute.String;
    items: Attribute.Component<'shared.items', true>;
  };
}

export interface SharedSubNavItems extends Schema.Component {
  collectionName: 'components_shared_sub_nav_items';
  info: {
    displayName: 'subNavItems';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
  };
}

export interface SharedTeamListTemplate extends Schema.Component {
  collectionName: 'components_shared_team_list_templates';
  info: {
    displayName: 'teamListTemplate';
    icon: 'apps';
  };
  attributes: {
    name: Attribute.String;
    position: Attribute.String;
    avatar: Attribute.String;
    color: Attribute.String;
    quote: Attribute.Text;
    description: Attribute.Blocks;
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

export interface SharedTeamTemplate extends Schema.Component {
  collectionName: 'components_shared_team_templates';
  info: {
    displayName: 'teamTemplate';
    icon: 'bell';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    description: Attribute.String;
    items: Attribute.Component<'shared.team-list-template', true>;
  };
}

export interface SharedValuesTemplate extends Schema.Component {
  collectionName: 'components_shared_values_templates';
  info: {
    displayName: 'valuesTemplate';
  };
  attributes: {
    tag: Attribute.String;
    title: Attribute.String;
    items: Attribute.Component<'shared.featurestemplate', true>;
  };
}

export interface SharedWeareTemplate extends Schema.Component {
  collectionName: 'components_shared_weare_templates';
  info: {
    displayName: 'weareTemplate';
    icon: 'bell';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    description: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.address': SharedAddress;
      'shared.basic-item': SharedBasicItem;
      'shared.basic-template': SharedBasicTemplate;
      'shared.brands-template': SharedBrandsTemplate;
      'shared.card-template': SharedCardTemplate;
      'shared.contact-us': SharedContactUs;
      'shared.contacts-template': SharedContactsTemplate;
      'shared.contacts': SharedContacts;
      'shared.contacttemplate': SharedContacttemplate;
      'shared.evolution-template': SharedEvolutionTemplate;
      'shared.evolution': SharedEvolution;
      'shared.features': SharedFeatures;
      'shared.featurestemplate': SharedFeaturestemplate;
      'shared.footer': SharedFooter;
      'shared.hero-home-template': SharedHeroHomeTemplate;
      'shared.hero-template': SharedHeroTemplate;
      'shared.hero': SharedHero;
      'shared.input-template': SharedInputTemplate;
      'shared.item-value': SharedItemValue;
      'shared.items-evolutiontemplate': SharedItemsEvolutiontemplate;
      'shared.items-find': SharedItemsFind;
      'shared.items-template-home': SharedItemsTemplateHome;
      'shared.items-template': SharedItemsTemplate;
      'shared.items': SharedItems;
      'shared.media': SharedMedia;
      'shared.menu-items-template': SharedMenuItemsTemplate;
      'shared.menu-template': SharedMenuTemplate;
      'shared.metada-template': SharedMetadaTemplate;
      'shared.mission-template': SharedMissionTemplate;
      'shared.nav-item': SharedNavItem;
      'shared.onboarding-template': SharedOnboardingTemplate;
      'shared.process-item-template': SharedProcessItemTemplate;
      'shared.process-template': SharedProcessTemplate;
      'shared.products': SharedProducts;
      'shared.quote': SharedQuote;
      'shared.review-template': SharedReviewTemplate;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.services-template': SharedServicesTemplate;
      'shared.slider': SharedSlider;
      'shared.stats-template': SharedStatsTemplate;
      'shared.step-template': SharedStepTemplate;
      'shared.studies-template': SharedStudiesTemplate;
      'shared.studies': SharedStudies;
      'shared.sub-nav-items': SharedSubNavItems;
      'shared.team-list-template': SharedTeamListTemplate;
      'shared.team-list': SharedTeamList;
      'shared.team-template': SharedTeamTemplate;
      'shared.values-template': SharedValuesTemplate;
      'shared.weare-template': SharedWeareTemplate;
    }
  }
}
