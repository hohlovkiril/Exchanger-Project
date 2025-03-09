import { RoutesPathnameMapType, RouteType } from "../types";

export default function parseRoutesPathnameMap(
  nameMap: RoutesPathnameMapType,
  routes: RouteType[],
  parentSegment?: string)
{
  routes.forEach((route: RouteType) => {
    if (parentSegment) {
      const segment = `${parentSegment}${route.segment}`;
      nameMap[segment] = route.breadcrumb
        ? {
          regex: route.regex,
          breadcrumbLabel: route.breadcrumb.label,
          breadcrumbIcon: route.breadcrumb.icon,
          pageTitle: route.title,
        }
        : {
          regex: route.regex,
          breadcrumbLabel: route.title,
          pageTitle: route.title,
        };

      if (Array.isArray(route.element)) {
        parseRoutesPathnameMap(nameMap, route.element, segment);
      }
    } else {
      nameMap[route.segment] = route.breadcrumb
        ? {
          regex: route.regex,
          breadcrumbLabel: route.breadcrumb.label,
          breadcrumbIcon: route.breadcrumb.icon,
          pageTitle: route.title,
        }
        : {
          regex: route.regex,
          breadcrumbLabel: route.title,
          pageTitle: route.title,
        };

      if (Array.isArray(route.element)) {
        parseRoutesPathnameMap(nameMap, route.element, route.segment);
      }
    }
  })
}